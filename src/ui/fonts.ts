import { Poppins, Kanit } from 'next/font/google'; //Import any google font here

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const kanit = Kanit({
  weight:['300','500'],
  subsets: ['latin'],
});
