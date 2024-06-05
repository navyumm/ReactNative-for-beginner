import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center text-center space-x-4">
                <TextInput
                    className="text-base pb-3 mt-0.5 text-white flex-1 font-pregular"
                    value={value}
                    placeholder="Search for a video topic"
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                <TouchableOpacity>
                    <Image 
                        source={icons.search}
                        className="w-6 h-10"
                        resizeMode= 'contain'
                    />

                </TouchableOpacity>
            </View>

    );
};

export default SearchInput;
