import {SearchBar} from 'react-native-elements';
import React from 'react';

export class SearchBarArtie extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search: string) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        platform="android"
        value={search}
      />
    );
  }
}
