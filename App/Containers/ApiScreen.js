import React from "react";
import { connect } from "react-redux";
import { FlatList, Image } from "react-native";
import {
  List,
  ListItem,
  Text,
  View,
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'

class ApiScreen extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <ListItem style={{ justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Text note>{item.description}</Text>
      </ListItem>
    );
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Api Screen</Title>
          </Body>
          <Right />
        </Header>
        <Text>
          ApiScreen
        </Text>
        <Button onPress={() => this.props.getUserAvatar("knewter")}>
          <Text> Get knewter Avatar </Text>
        </Button>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: this.props.avatar
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.github.avatar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAvatar: username =>
      dispatch({ type: "USER_REQUEST", username: username })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ApiScreen);
