import lettermark from '../images/lettermark_logo.png';
import wordmark from '../images/wordmark_logo.png';
import pictorial from '../images/pictorial_logo.png';
import abstract from '../images/abstract_logo.png';
import mascot from '../images/mascot_logo.png';
import combination from '../images/combination_logo.png';

const items = [
  {
    id: 1,
    title: 'Lettermark Logos',
    type: 'lettermark',
    icon: 'FaItalic',
    content: "A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials.The lettermark is all about simplicity.\n But utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.",
    img: lettermark,
  },
  {
    id: 2,
    title: 'Wordmark Logos',
    type: 'wordmark',
    icon: 'FaWeebly',
    content: "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business'name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition",
    img: wordmark,
  },
  {
    id: 3,
    title: 'Pictorial Mark Logos',
    type: 'pictorial',
    icon: 'FaLemon',
    content: "A pictorial mark (sometimes called brand mark or logo symbol) is an icon - or graphic-based logo. It's probably the image that comes to mind when you think \"logo\": the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies'logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.\n A true brand mark is only an image. Because of this, it can be trickly logo type for new companies, or those without strong brand recognition, to use.",
    img: pictorial,
  },
  {
    id: 4,
    title: 'Abstract Mark Logos',
    type: 'abstract',
    icon: 'FaGoogleDrive',
    content: "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image - like an apple or bird - It's an abstract geometric form that represents your business. A few famous example include the BP startburst-y logo, the Pepsi devided circle and the strip-y Adidas flower.\n Like all logo symbols, abstract markes work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand",
    img: abstract,
  },
  {
    id: 5,
    title: 'Mascot Logos',
    type: 'mascot',
    icon: 'FaTheaterMasks',
    content: "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.\n A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally.",
    img: mascot,
  },
  {
    id: 6,
    title: 'Combination Logos',
    type: 'combination',
    icon: 'FaPuzzlePiece',
    content: 'A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.\n Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.',
    img: combination,
  },
];

export default items;
