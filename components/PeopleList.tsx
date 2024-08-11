import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PeopleList() {
  const peopleData = [
    {
      id: 1,
      name: 'John Doe',
      profile_picture:
        'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
      status: 'SoftWare Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profile_picture:
        'https://static.vecteezy.com/system/resources/thumbnails/003/492/180/small_2x/mulatto-woman-student-holding-book-in-her-hand-and-study-back-to-school-image-free-photo.jpg',
      status: 'Doctor',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      profile_picture:
        'https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg',
      status: 'Web Developer',
    },
    {
      id: 4,
      name: 'Bob Brown',
      profile_picture:
        'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1768126784.jpg',
      status: 'Civil Engineer',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>People Data</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {peopleData.map(({id, name, profile_picture, status}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: profile_picture,
              }}
              style={styles.peopleImage}
            />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black',
    paddingTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  peopleImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  status: {
    fontSize: 12,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#afb3b0',
    padding: 20,
    borderRadius: 5,
  },
});
