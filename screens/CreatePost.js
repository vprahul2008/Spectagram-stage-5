import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInputBase } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default class CreatPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            previewImage: "image_1",
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true })
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          return (
              <View style={styles.container}>
                  <SafeAreaView style={styles.droidSafeArea} />
                  <View style={styles.appTitle}>
                      <View style={styles.appIcon}>
                          <Image
                              source={require("../assets/logo.png")}
                              style={styles.iconImage}
                            ></Image>
                      </View>
                      <View style={styles.appTitleTextContainer}>
                          <Text style={styles.appTitleText}>New Post</Text>
                      </View>
                  </View>
                  <View style={styles.fieldsContainer}>
                      <ScrollView>
                          <Image
                              source={require("../assets/logo.png")}
                              style={styles.iconImage}
                          ></Image>
                          <View style={{height:
                                    RFValue(this.state.dropdownHeight) }}>
                                        <DropDownPicker

                                            items={[
                                                
                                                { label: "Image 1", value: "image_1" },

                                                { label: "Image 2", value: "image_2" },
                                                
                                                { label: "Image 3", value: "image_3" },
                                                
                                                { label: "Image 4", value: "image_4" },
                                                
                                                { label: "Image 5", value: "image_5" },
                                            ]}

                                            defaultValue={this.state.previewImage}

                                            containerStyle={{

                                                height: 40,

                                                borderRadius: 20,
                                                
                                                marginBottom: 10
                                            }}

                                            onOpen={ () => {
                                                this.setState({ dropdownHeight: 170 });
                                            }}

                                            onClose={ () => {
                                                this.setState({ dropDownHeight: 40 });
                                            }}

                                            style={{ backgroundColor: "transparent" }}

                                            itemStyle={{
                                                justifyContent: "flex-start"
                                            }}

                                            dropDownStyle={{ backgroundColor: "#2a2a2a"}}

                                            labelStyle={{

                                                color:"white"
                                            
                                            }}

                                            arrowStyle={{
                                            
                                                color: "white"
                                            
                                            }}

                                            onChangeItem={item =>
                                            
                                                this.setState({
                                            
                                                    previewImage: item.value
                                            
                                                })
                                            
                                            }
                                        />

                                    </View>

                                    <TextInput

                                        style={styles.inputFont}

                                        onChangeText={caption => this.setState({ caption})}

                                        placeholder={"Caption"}

                                        placeholderTextColor="white"

                                    />
                      </ScrollView>
                  </View>

                  <View style={{ flex: 0.08}} />
              </View>
          )
        }
}
}