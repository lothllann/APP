import { View, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";

interface DParams {
  date: string;
}

export function Habit() {
  const route = useRoute();

  const { date } = route.params as DParams;
  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format("dddd");
  const dayAndMonth = parseDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="mt-6 text-zinc-400 font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={70} />

        <View>
          <CheckBox title="Beber 2L de agua" checked={false}/>
          <CheckBox title="Dormir 8 horas" checked={true}/>
        </View>

      </ScrollView>
    </View>
  );
}
