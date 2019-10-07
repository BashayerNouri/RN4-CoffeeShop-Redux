import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

import { Image } from "react-native";

export default class index extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Thank you, come back soon! ;)</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://media3.giphy.com/media/l0MYyDa8S9ghzNebm/source.gif"
                  }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
