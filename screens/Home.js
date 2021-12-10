import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // datos dummys

    const initialCurrentLocation = {
        streetName: "Luis Encinas",
        gps: {
            latitude: 29.078968,
            longitude:  -110.936623
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Tacos",
            icon: icons.taco_bowl,
        },
        {
            id: 2,
            name: "Caldo",
            icon: icons.caldo,
        },
        {
            id: 3,
            name: "Tamales",
            icon: icons.tamal,
        },
        {
            id: 4,
            name: "Burros",
            icon: icons.burro,
        },
        {
            id: 5,
            name: "Carnes",
            icon: icons.carne,
        },
        {
            id: 6,
            name: "Albondiga",
            icon: icons.albondiga,
        },
        {
            id: 7,
            name: "Enchiladas",
            icon: icons.enchilada,
        },
        {
            id: 8,
            name: "Chorizo",
            icon: icons.chorizo,
        },
        {
            id: 9,
            name: "Machaca",
            icon: icons.machaca,
        },
       

    ]

    // calidad  prcio
    const affordable = 1
    const fairPtaco = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "el Burrote",
            rating: 4.8,
            categories: [4,5],
            ptacoRating: affordable,
            photo: images.burrosConTortillaDeHarina,
            duration: "2 km",
            location: { 
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_1,
                name: "esteban"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Burro de carne",
                    photo: images.burrosConTortillaDeHarina,
                    description: "Burro con Carne Asada y frijol",
                    ptaco: 70
                },
                {
                    menuId: 2,
                    name: "Burro de chicharron",
                    photo: images.burrosConTortillaDeHarina,
                    description: "Burro con chicharrones",
                    ptaco: 65
                },
                {
                    menuId: 3,
                    name: "Burro italiano ",
                    photo: images.burrosConTortillaDeHarina,
                    description: "Burro con carne y peperoni ",
                    ptaco: 80
                }
            ]
        },
        {
            id: 2,
            name: "Tu caldo",
            rating: 4.8,
            categories: [2],
            ptacoRating: expensive,
            photo: images.machacaSonorense,
            duration: "3 km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_2,
                name: "Miguel"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Caldo de chile",
                    photo: images.carneConChileColorado,
                    description: "con carne",
                    ptaco: 70
                },
                {
                    menuId: 5,
                    name: "caldo de trigo",
                    photo: images.albondiga,
                    description: "con pata",
                    ptaco: 50.00
                },
                {
                    menuId: 6,
                    name: "Caldo de albondigas",
                    photo: images.albondigasDeCarne,
                    description: "Caldo de verduras con Albondigas",
                    ptaco: 90
                },
                {
                    menuId: 7,
                    name: "Caldo de frijol ",
                    photo: images.gallinaPinta,
                    description: "Caldo de frijoles con carne",
                    ptaco: 80
                }
            ]
        },
        {
            id: 3,
            name: "el Donte ",
            rating: 4.8,
            categories: [3],
            ptacoRating: expensive,
            photo: images.tamalSonorense,
            duration: "1 km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_3,
                name: "jorge"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Tamal Sonorense",
                    photo: images.tamalSonorense,
                    description: "Tamal de carne con chile",
                    ptaco: 20
                }
            ]
        },
        {
            id: 4,
            name: "Carniseria el Hillo",
            rating: 4.8,
            categories: [5],
            ptacoRating: expensive,
            photo: images.carneSeca,
            duration: "2 Km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_4,
                name: "Juan"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Chorizo de Res",
                    photo: images.chorizo,
                    description: "Fresh salmon,  taco, fresh juicy avocado",
                    ptaco: 50
                }
            ]
        },
        {
            id: 5,
            name: "Mi Sonora",
            rating: 4.8,
            categories: [1],
            ptacoRating: affordable,
            photo: images.gorditasConCarne,
            duration: "1 km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_4,
                name: "Marta"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Tacos Sonorenses",
                    photo: images.tostadasConCarne,
                    description: "Tacos con verdura",
                    ptaco: 70
                },
                {
                    menuId: 11,
                    name: "Tacos con machaca",
                    photo: images.machacaSonorense,
                    description: "Tacos con machaca",
                    ptaco: 50
                },
                {
                    menuId: 12,
                    name: "Tacos con chicharron y chile",
                    photo: images.machaca,
                    description: "Tacos con chicharon y chile serrano",
                    ptaco: 50
                },
                {
                    menuId: 13,
                    name: "Gorditas De carne",
                    photo: images.gorditasConCarne,
                    description: "Gorditas de carne con verdura",
                    ptaco: 80
                },

            ]
        },
        {

            id: 6,
            name: "Albondigones",
            rating: 4.9,
            categories: [6],
            ptacoRating: affordable,
            photo: images.albondigasDeCarne ,
            duration: "4 KM",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_1,
                name: "David"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Albondigas",
                    photo: images.albondigasDeCarne,
                    description: "Con salsa de verduras",
                    ptaco: 70
                },
                {
                    menuId: 13,
                    name: "Albondigas en caldo",
                    photo: images.albondigasDeCarne,
                    description: "Albondigas en caldo con trigo",
                    ptaco: 70
                },
                {
                    menuId: 14,
                    name: "Albondigas con arroz",
                    photo: images.albondigasDeCarne,
                    description: "Albondigones",
                    ptaco: 65
                }
            ]

        },
        {
            id: 7,
            name: "Enchiladas corki",
            rating: 4.8,
            categories: [7],
            ptacoRating: expensive,
            photo: images.enchiladasSonorenses,
            duration: "2 Km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_4,
                name: "cesar"
            },
            menu: [
                {
                    menuId: 15,
                    name: "Enchiladas Sonorenses",
                    photo: images.enchiladasSonorenses,
                    description: "Enchiladas con verduras",
                    ptaco: 85
                }
            ]
        },
        {
            id: 7,
            name: "Tu carne",
            rating: 4.8,
            categories: [8],
            ptacoRating: expensive,
            photo: images.chorisoDeRes,
            duration: "2 Km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_4,
                name: "Angel"
            },
            menu: [
                {
                    menuId: 15,
                    name: "Chorizo de Res",
                    photo: images.chorisoDeRes,
                    description: "Chorizo a la Asada",
                    ptaco: 75
                }
            ]
        },
        {
            id: 7,
            name: "Ya se hizo la Machaca",
            rating: 4.8,
            categories: [9],
            ptacoRating: expensive,
            photo: images.machacaSonorense,
            duration: "1 Km",
            location: {
                latitude: 29.078968,
                longitude:  -110.936623
            },
            courier: {
                avatar: images.avatar_4,
                name: "Edgar"
            },
            menu: [
                {
                    menuId: 16,
                    name: "Machaca Con chile",
                    photo: images.machaca,
                    description: "Machaca con verduras y chiles",
                    ptaco: 75
                }
            ]
        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filtro de comidas
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Menu</Text>
                

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* imagen */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* info de comidas */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* popular */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* categorias */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* puntuacion */}
                        {
                            [1, 2, 3].map((ptacoRating) => (
                                <Text
                                    key={ptacoRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (ptacoRating <= item.ptacoRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home