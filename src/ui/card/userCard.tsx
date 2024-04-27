import { Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function userCard(
  { cardNumber, expirationDate, cvcCode, ownerName }: 
  { cardNumber: string, expirationDate: string, cvcCode: String, ownerName: string }) {
  return (
    <Card className="h-72 min-w-96 max-w-[440px] w-full relative">
      <CardHeader className="text-black font-bold">
        <Image
          alt="Chip"
          className="left-8 top-20"
          src="/images/card/chip.png"
          width={50}
          height={50}
        />
        <p className="absolute left-12 bottom-24 text-2xl">{cardNumber}</p>
        <p className="absolute right-12 bottom-8 text-lg">{expirationDate}</p>
        <p className="absolute left-12 bottom-8 text-lg">{ownerName}</p>
      </CardHeader>
      <div className="absolute inset-0">
        <Image
          removeWrapper
          alt="background"
          className="z-0 w-full h-full object-cover"
          src={`https://source.unsplash.com/random/?landscape&${Date.now()}`}
        />
      </div>
      <div className="absolute inset-0 bg-white opacity-50 z-1"></div>
    </Card>
  )
}