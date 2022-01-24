import React, { useState } from "react";
import { FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import SortByPicker from "./SortByPicker";
import ItemSeparator from "../others/ItemSeparator";
import theme from "../../theme";

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Get the nodes from the edges array
      repositoryNodes: this.props.repositories
        ? this.props.repositories.edges.map((edge) => edge.node)
        : [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.repositories !== this.props.repositories) {
      this.setState({
        repositoryNodes: this.props.repositories
          ? this.props.repositories.edges.map((edge) => edge.node)
          : [],
      });
    }
  }

  renderHeader = () => {
    const props = this.props;
    return (
      <RepositoryListHeader
        searchQuery={props.searchQuery}
        changeSearchQuery={props.changeSearchQuery}
        selectedValue={props.selectedValue}
        onChange={props.onChange}
      />
    );
  };

  repositoryItemContainer = ({ item }) => (
    <Pressable onPress={() => this.props.onRepositoryPress(item.id)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  render() {
    return (
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={this.renderHeader}
        data={this.state.repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.repositoryItemContainer}
        onEndReachedThreshold={0.5}
        onEndReached={this.props.onEndReach}
      />
    );
  }
}

const RepositoryListHeader = ({
  searchQuery,
  changeSearchQuery,
  selectedValue,
  onChange,
}) => {
  return (
    <>
      <Searchbar
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(value) => changeSearchQuery(value)}
        style={styles.searchBar}
      />
      <SortByPicker selectedValue={selectedValue} onChange={onChange} />
    </>
  );
};

const orderByVariables = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  },
  highestRating: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  },
  lowestRating: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  },
};

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories({
    ...orderByVariables[order],
    first: 6,
    searchKeyword: searchValue,
  });
  const navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onRepositoryPress={(id) => navigate(`/repository/${id}`)}
      selectedValue={order}
      onChange={(itemValue) => setOrder(itemValue)}
      searchQuery={searchQuery}
      changeSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
});
