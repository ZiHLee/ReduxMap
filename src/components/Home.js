import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SearchBar} from '@ant-design/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMap, getMap} from '../actions/mapActions';

const Home = () => {
  const [value, setValue] = useState('');
  const [removeV, setRemoveV] = useState(false);
  const onSearch = searchText => {
    setRemoveV(false);
  };
  const onCancel = () => {
    setValue('');
    setRemoveV(false);
  };
  const onChange = data => {
    setValue(data);
    setRemoveV(false);
    if (data.trim().length !== 0) {
      setRemoveV(true);
    }
  };

  const map = useSelector(state => state.map.map);
  const mapFilter = map.filter(
    map => map.city == value || map.city.toUpperCase().startsWith(value),
  );
  const hist = useSelector(state => state.map.history);
  const dispatch = useDispatch();
  const checkDuplicate = data => {
    if (!hist.includes(data)) {
      dispatch(addMap(data));
    }
  };
  useEffect(() => {
    dispatch(getMap());
  }, [dispatch]);

  return (
    <View>
      <SearchBar
        value={value}
        placeholder="Search"
        cancelText="Cancel"
        onChange={onChange}
        onCancel={onCancel}
        onSubmit={onSearch}
      />
      {removeV && (
        <View>
          {/* style={{position: 'absolute', marginTop: 50, width: '100%', height: 100, backgroundColor: 'white'}} */}
          {map &&
            mapFilter.map((map, index) => (
              <Text
                style={styles.searchOptions}
                key={index}
                onPress={() => {
                  //console.log(index);
                  setValue(map.city);
                  setRemoveV(false);
                  checkDuplicate(
                    map.city + ' : ' + map.latitude + ' , ' + map.longitude,
                  );
                }}>
                {map.city}
              </Text>
            ))}
        </View>
      )}
      <Text style={styles.searchResult}>
        {hist.map((hist, index) => (
          <Text key={index}>{hist + '\n'}</Text>
        ))}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchOptions: {
    marginTop: 5,
    padding: 20,
    backgroundColor: 'white',
  },
  searchResult: {
    marginTop: 20,
    backgroundColor: 'grey',
    height: 500,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
