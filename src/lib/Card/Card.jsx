import {
  ComponentContainer,
  SectionHeader,
  Sidebar
} from "../../documentation";
import { Card, CardWithBadge } from "../../components";

const product = [
  {
    title: "Nendoroids from Hubbyte Toy Store",
    imgSrc:
      "https://cdn1.clickthecity.com/wp-content/uploads/2021/07/06111602/02_e5552b0c-68bb-4e9f-94bb-58c3e07c84c8_1024x1024.jpg",
    price: 2999,
    oldPrice: 4999,
    discount: "50%"
  },
  {
    title:
      "Demon Slayer: Kimetsu no Yaiba PM Perching Figure - Giyu Tomioka: Hashira Meeting",
    imgSrc:
      "https://hubbytetoystore.com/cdn/shop/files/giyu_tomioka-hashira_meeting-pm_perching_figure_1_b8a4b837-b9ba-4472-bd57-76ced442f966_large.jpg?v=1694526340",
    price: 6749,
    oldPrice: 7499,
    discount: "10%"
  },
  {
    title: "S.H.Figuarts - Street Fighter - Ryu: Outfit 2",
    imgSrc:
      "https://hubbytetoystore.com/cdn/shop/files/FIGURE-159429_01_large.jpg?v=1694522603",
    price: 10000
  }
];

export const CardDoc = () => {
  const basicCardCodeString = `<Card 
    product={
      title: "Nendoroids from Hubbyte Toy Store",
      imgSrc:"https://cdn1.clickthecity.com/wp-content/94bb-58c3e07c84c8_1024x1024.jpg",
      price: 2999,
      oldPrice: 4999,
      discount: "50%"
  } />
  
  <Card 
      product={
        title:"Demon Slayer: Kimetsu no Yaiba PM Perching Figure - Giyu Tomioka: Hashira Meeting",
        imgSrc:"https://hubbytetoystore.com/cdn/b8a4b837-b9ba-4472-bd57-76ced442f966",
        price: 6749,
        oldPrice: 7499,
        discount: "10%"
    } />
  
  <Card 
      product={
        title: "S.H.Figuarts - Street Fighter - Ryu: Outfit 2",
        imgSrc:"https://hubbytetoystore.com/cdn/shop/files/FIGURE-159429_01_large.jpg?v=1694522603",
        price: 10000
    } />`;

  const cardWithBadgeCodeString = `<CardWithBadge
    product={
      title: "Nendoroids from Hubbyte Toy Store",
      imgSrc:"https://cdn1.clickthecity.com/wp-content/94bb-58c3e07c84c8_1024x1024.jpg",
      price: 2999,
      oldPrice: 4999,
      discount: "50%"
    }
    badgeText="Sale"
    badgeColor="#4671E9"
/>

<CardWithBadge
    product={
      title:"Demon Slayer: Kimetsu no Yaiba PM Perching Figure - Giyu Tomioka: Hashira Meeting",
      imgSrc:"https://hubbytetoystore.com/cdn/b8a4b837-b9ba-4472-bd57-76ced442f966",
      price: 6749,
      oldPrice: 7499,
      discount: "10%"
    }
    badgeText="Trending"
    badgeColor="#ff2c2c"
/>

<CardWithBadge
    product={
      title: "S.H.Figuarts - Street Fighter - Ryu: Outfit 2",
      imgSrc:"https://hubbytetoystore.com/cdn/shop/files/FIGURE-159429_01_large.jpg?v=1694522603",
      price: 10000
    }
    badgeText="New"
    badgeColor="f2b134"
/>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Card Component"
          description="A card is an element that is used to impart detailed knowledge about a product or category. They can mostly be found on e-commerce websites to display a product."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Basic Card"
          description="This is a basic card which showcases the product image, title, discount price and action buttons."
          codeString={basicCardCodeString}
        >
          <Card product={product[0]} />
          <Card product={product[1]} />
          <Card product={product[2]} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Card with Badge"
          description="This is a basic card which which contains a badge. Badges are used to highlight specific information to catch the user's attention. They can appear to top-left or top-right corner of the card."
          codeString={cardWithBadgeCodeString}
        >
          <CardWithBadge
            product={product[0]}
            badgeText="Sale"
            badgeColor="#4671E9"
          />
          <CardWithBadge
            product={product[1]}
            badgeText="Trending"
            badgeColor="#ff2c2c"
          />
          <CardWithBadge
            product={product[2]}
            badgeText="New"
            badgeColor="#f2b134"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
