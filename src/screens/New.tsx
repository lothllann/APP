import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const avaliableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToggleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  };
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar Habtito
        </Text>

        <Text className="mt-6 text-white font-extrabold text-base">
          Qual é o seu compremetimento?
        </Text>

        <TextInput
          placeholder="Exercicios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white
                    focus:border-2 focus:border-green-600"
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrencia?
        </Text>

        {avaliableWeekDays.map((day, i) => (
          <CheckBox
            key={`${day}-${i}`}
            title={day}
            checked={weekDays.includes(i)}
            onPress={() => handleToggleWeekDay(i)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}