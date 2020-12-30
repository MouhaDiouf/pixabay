import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import axios from 'axios';

export default class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '8767791-e1853fb2852352e2cd5c43b5b',
    images: [],
  };
  onTextChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
        .then((res) => {
          this.setState({
            images: res.data.hits,
          });
        })
        .catch((err) => console.log(err));
    });
  }

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={(e) => {
            this.onTextChange(e);
          }}
          label="Search For Pictures"
          fullWidth={true}
        />
        <SelectField
          name="amount"
          labelId="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
        </SelectField>
      </div>
    );
  }
}
