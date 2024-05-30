import { View, Text } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/Header'
import { LinearGradient } from 'expo-linear-gradient';
import {HorizontalSpace, Container,PesquisaContainer,AutocompleteContainer,Item,ItemText   } from './styles'
import { SearchBar } from 'react-native-elements';
import AutocompleteInput from 'react-native-autocomplete-input';
import {FlatList } from 'react-native';

const CITIES = [
  'Porto', 'Porto', 'Porto', 'Porto', 'Aveiro', 'Faro', 'Évora', 'Leiria', 'Funchal', 'Setúbal',
  // Adicione mais cidades conforme necessário
];

export default function Pesquisa() {

  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);


  const updateSearch = (search) => {
    setSearch(search);
    if (search === '') {
      setFilteredCities([]);
    } else {
      const filtered = CITIES.filter(city => city.toLowerCase().includes(search.toLowerCase()));
      setFilteredCities(filtered);
    }
  };


  return (
    <Container>
    <LinearGradient
    colors={['#009681', '#2C4AC7']}
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}>
   <Header
        avatarSource="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="André Santos"
        city="Porto"
      />
        <HorizontalSpace></HorizontalSpace>
            </LinearGradient>

     <PesquisaContainer>
     <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
      />

{filteredCities.length > 0 && (
        <AutocompleteContainer>
          <FlatList
            data={filteredCities}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Item
                onPress={() => {
                  setSearch(item);
                  setFilteredCities([]);
                }}
              >
                <ItemText>{item}</ItemText>
              </Item>
            )}
          />
        </AutocompleteContainer>
      )}
     </PesquisaContainer>

        </Container>
          
  )
}