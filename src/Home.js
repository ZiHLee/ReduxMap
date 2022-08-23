import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from '@ant-design/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMap, getMap} from '../actions/mapActions';

const Home = () => {
  const map = useSelector(state => state.map.map);
  const hist = useSelector(state => state.map.history);
  const [value, setValue] = useState('');
  const [removeV, setRemoveV] = useState(false);
  const onSearch = searchText => {
    setRemoveV(false);
  };
  const onCancel = () => {
    setValue('');
  };
  const onChange = data => {
    setValue(data);
    setRemoveV(true);
  };

  const dispatch = useDispatch();
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
            map.map((map, index) => (
              <Text
                style={{marginTop: 5, padding: 20, backgroundColor: 'white'}}
                key={index}
                onPress={() => {
                  //console.log(index);
                  setValue(map.city);
                  setRemoveV(false);
                  dispatch(addMap(map.city))
                }}>
                {map.city.includes(value)}
              </Text>
            ))}
        </View>
      )}
      <Text style={{marginTop: 20, backgroundColor: 'grey', height: 500}}>
        {hist && hist.map((hist, index) => (
          <Text key={index}>{hist+"\n"}</Text>
        ))}
      </Text>
    </View>
  );
};

export default Home;
