import { HoverEffect } from "./ui/card-hover-effect";

export function Example() {
  return (
    <div className="max-w-5xl mx-auto px-8 -mb-40 ">
      <h2 className=" text-[26px] text-center sm:px-[40px]">Discover Our Platform's Top Features and Services </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Sports betting",
    description:
      "If you're not looking to just play online casino games, you can also try your hand at sports betting. Some gambling sites in India will have a dedicated online sportsbook where you can wager on popular events.",
    link: "https://stripe.com",
      
  },
  {
    title: "Mobile sites",
    description:
      "Mobile gaming is key to any top online casino. We look for a reliable and secure mobile casino or app that lets you log in using your existing account, and play for real Rupees on the move.",
    link: "https://netflix.com",
  },
  {
    title: "Game variety",
    description:
      "An online casino site should offer a variety of different games. We like to see hundreds of online slot machines, as well as plenty of table games like online roulette, poker, blackjack, and more.",
    link: "https://google.com",
  },
  {
    title: "Roulette",
    description:
      " Roulette is a fan-favorite at online gambling sites. The game is simple but fun to play – simply place your bet and watch the wheel spin.",
    link: "https://meta.com",
  },
  {
    title: "Fast payouts",
    description:
      "Everybody likes no-hassle cash-outs. We look for online casinos that have speedy withdrawals, with money being released just days after a request is made.",
    link: "https://amazon.com",
  },
  {
    title: "Deposit methods",
    description:
      "Online real money casinos should offer multiple ways to add funds to your account. We like to see payment options in Indian Rupees and from a variety of banking providers.",
    link: "https://microsoft.com",
  },
];
