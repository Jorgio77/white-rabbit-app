import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Description = ({description})  => {

  const [expanded, setExpanded] = useState({
    expanded: 2
  });

  function expand() {
    setExpanded({expanded: 100})
  }

  function reduce() {
    setExpanded({expanded: 2})
  }

  return (
      <View style={styles.descriptionContainer}>
          <Text numberOfLines={expanded.expanded}>{description}</Text>
          {expanded.expanded === 2 && <TouchableOpacity onPress={expand}><Text>View More</Text></TouchableOpacity>}
          {expanded.expanded === 100 && <TouchableOpacity onPress={reduce}><Text>View Less</Text></TouchableOpacity>}
      </View>
  );
};

const styles = StyleSheet.create({

  descriptionContainer: {
    marginLeft: 10,
    marginRight: 10
  }

});


export default Description;
