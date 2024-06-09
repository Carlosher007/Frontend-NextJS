import './Cart.css';

import { useEffect, useId, useState } from 'react';
import { CartIcon, ClearCartIcon } from '@/app/core/ui/icons';
import { useCartStore, useUserStore } from '@/app/core/store/';
import Image from 'next/image';
import { Image as ImageDefinition } from '@/app/core/lib/definitions';
import { CldImage } from 'next-cloudinary';
import { getCart as getCartAPI } from '@/app/core/api/shoppingcart/service';
import { getImageById } from '@/app/core/api/dashboardImages/service';
import { Button } from '@nextui-org/button';
import { deleteCard } from '@/app/core/api/api';
import { buyImages } from '@/app/core/api/dashboardImages/service';
import { toast } from 'sonner';

function CartItem({
	image,
	removeFromCart,
}: {
	image: ImageDefinition;
	removeFromCart: () => void;
}) {
	return (
		<li>
			<CldImage
				src={image.src}
				loading="lazy"
				alt={image.name}
				className="cart-image"
				width={image.width}
				height={image.height}
			/>
			<div className="mt-2 flex justify-center">
				<strong>{image.name}</strong> - ${image.price}
			</div>

			<footer className="mt-1">
				<button className="bg-neutral-800 text-sm " onClick={removeFromCart}>
					Quitar
				</button>
			</footer>
		</li>
	);
}

export function Cart() {
	const cartCheckboxId = useId();
	const { cart, clearCart, removeFromCart, setCart } = useCartStore(
		(state) => ({
			cart: state.cart,
			clearCart: state.clearCart,
			removeFromCart: state.removeFromCart,
			setCart: state.setCart,
		}),
	);

	const [idUser, loading, setLoading] = useUserStore((state) => [
		state.idUser,
		state.loading,
		state.setLoading,
	]);

	const handleBuy = async () => {
		try {
			if (idUser) {
				const imagesCartIdNumbers = cart.map((image) => image.imageId);
				const response = await buyImages(idUser, imagesCartIdNumbers);
				if (response) {
					clearCart(idUser);
          toast.success('Images bought successfully');
        }
			}
		} catch (error) {
			console.error(error);
      toast.error('An error occurred while buying the images');
		}
	};

	useEffect(() => {
		const getCartApi = async () => {
			if (idUser) {
				const response = await getCartAPI(idUser);
				if (!response) return;
				const { cartImages } = response;
				// const response2 = await getImageById(cartImages[0].imageId)
				const imagePromises = cartImages.map(async (item: ImageDefinition) => {
					const response2 = await getImageById(item.imageId);
					return response2;
				});

				const images = await Promise.all(imagePromises);
				console.log(images);
				setCart(images);
			}
		};
		getCartApi();
	}, [idUser]);

	return (
		<>
			<label className="cart-button bg-default-200" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type="checkbox" hidden />

			<aside className="cart">
				<ul className="mt-9 flex flex-col gap-5 ">
					{cart.map((image) => (
						<CartItem
							key={image.imageId}
							removeFromCart={() => {
								if (idUser) {
									removeFromCart(image.imageId, idUser);
								}
							}}
							image={image}
						/>
					))}
				</ul>

				{cart.length > 0 ? (
					<div className="mt-3 flex justify-center">
						<button
							className="bg-neutral-800"
							onClick={() => {
								if (idUser) {
									clearCart(idUser);
								}
							}}
						>
							<ClearCartIcon />
						</button>
					</div>
				) : (
					<div className="mt-16 flex flex-grow items-center text-center text-lg">
						There are no items in the cart
					</div>
				)}

				<div className="mt-12 flex justify-center">
					<Button onClick={handleBuy}>Buy</Button>
				</div>
			</aside>
		</>
	);
}
