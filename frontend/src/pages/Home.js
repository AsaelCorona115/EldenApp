import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";

//Components
import ItemTypeCard from "../components/ItemTypeCard";

const Home = () => {
  const objectTypes = [
    {
      title: "Ammos",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ballista_bolt_elden_ring_wiki_guide_200px.png",
      Link: "ammos",
      key: 1,
    },
    {
      title: "Armors",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_tree_armor_elden_ring_wiki_guide_200px.png",
      Link: "armors",
      key: 2,
    },
    {
      title: "Ashes Of War",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_storm_stomp_bolstering_materials_elden_ring_wiki_guide_200px.png",
      Link: "ashes",
      key: 3,
    },
    {
      title: "Bosses",
      img: "https://i.ytimg.com/vi/MJCcd--ep6M/maxresdefault.jpg",
      Link: "bosses",
      key: 4,
    },
    {
      title: "Classes",
      img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/Edlen-Ring-Warrior-1024x683.jpg",
      Link: "classes",
      key: 5,
    },
    {
      title: "Creatures",
      img: "https://i.ytimg.com/vi/p5Dyl0mRpac/maxresdefault.jpg",
      Link: "creatures",
      key: 6,
    },
    {
      title: "Incantations",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/order_healing_incantation_elden_ring_wiki_guide_200px.png",
      Link: "incantations",
      key: 7,
    },
    {
      title: "Items",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy_glintstone_key_elden_ring_wiki_guide_200px.png",
      Link: "items",
      key: 8,
    },
    {
      title: "Locations",
      img: "https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2022/05/elden-ring-map-full-large.jpg",
      Link: "locations",
      key: 9,
    },
    {
      title: "NPCs",
      img: "https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-npc-locations-900x506.jpg",
      Link: "npcs",
      key: 10,
    },
    {
      title: "Shields",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintstone_shield_elden_ring_wiki_guide_200px.png",
      Link: "shields",
      key: 11,
    },
    {
      title: "Sorceries",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_stars_spells_elden_ring_wiki_guide_200px.png",
      Link: "sorceries",
      key: 12,
    },
    {
      title: "Spirits",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_jellyfish_ashes_elden_ring_wiki_guide_200px.png",
      Link: "spirits",
      key: 13,
    },
    {
      title: "Talismans",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancestral_spirits_horn_talisman_elden_ring_wiki_guide_200px.png",
      Link: "talismans",
      key: 14,
    },
    {
      title: "Weapons",
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_greathorn_greataxe_weapon_elden_ring_wiki_guide_200px.png",
      Link: "weapons",
      key: 15,
    },
  ];

  const [itemType, setItemType] = useState(null);

  const Home = () => {
    return (
      <>
        <Container className="pt-0 pt-lg-5">
          {/* Banner, Intro Row */}
          <Row className="mt-sm-5">
            <Col
              className="d-flex align-items-center py-5"
              xs={{ span: 12, order: 2 }}
              md={{ span: 4, order: 1 }}
            >
              <Image
                src="https://pbs.twimg.com/media/FGo2ktmWYAQN2px?format=jpg&name=4096x4096"
                fluid
              ></Image>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 8, order: 2 }}
              className="py-5 "
            >
              <h1 className="HeaderMainText display-4">Rise tarnished</h1>

              <p className="fs-3  mt-4 text-light">
                And be guided by grace to become an Elden Lord in the Lands
                Between. Follow the index of Sir Gideon Ofnir, the All knowing
                to collect all items, explore every corner of these lands and
                come to meet any ally or adversary these lands have to offer.
                Let the guidance of grace be brought to the Tarnished.
              </p>
            </Col>
          </Row>

          <Row className="d-flex ">
            <h1 className="text-center HeaderSubText">Items</h1>
            <hr className="ruler" />
          </Row>
        </Container>

        {/* Container for dynamic content */}
        <Container className="itemTypeContainer">
          <Row className="d-flex justify-content-center">
            {objectTypes.map((objectType) => {
              return (
                <Col xs={12} md={6} lg={4} xl={3} key={objectType.key}>
                  <ItemTypeCard
                    title={objectType.title}
                    img={objectType.img}
                    Link={objectType.Link}
                    key={objectType.key}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  };

  return Home();
};

export default Home;
