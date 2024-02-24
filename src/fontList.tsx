import { Raleway } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { Dela_Gothic_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const robotoFlex = Roboto_Flex({ subsets: ["latin"] });
const delaGothic = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
const nunito = Nunito_Sans({ subsets: ["latin"] });
export { raleway, robotoFlex, nunito, delaGothic };
