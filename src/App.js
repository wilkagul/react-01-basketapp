import { useState } from "react";
import {
  Button,
  Container,
  Group,
  List,
  SimpleGrid,
  ThemeIcon,
  Input,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import "./App.css";
import Card from "./components/Card";

const storeItems = [
  {
    name: "Airpods",
    src: "airpods",
    price: 20,
  },
  {
    name: "Fotoğraf Makinası",
    src: "camera",
    price: 210,
  },
  {
    name: "Kulaklık",
    src: "headphone",
    price: 25,
  },
  {
    name: "Retro Fotoğraf Makinası",
    src: "retro-cam",
    price: 25,
  },
  {
    name: "Oyuncak Araba",
    src: "toy-car",
    price: 25,
  },
  {
    name: "Kol Saati",
    src: "watch",
    price: 25,
  },
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>

      <List
        className="List"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        {basketItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
