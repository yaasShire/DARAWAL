import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../../components/molecules/header'
import StatusBarComponent from '../../../../components/atoms/statusBar'
const PrivacyAndPolicy = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarComponent />
            <View>
                <Header backButton={true} title={"Privacy & Policy"} navigation={navigation} />
            </View>
            <View style={styles.miniContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fuga delectus maiores veniam, saepe quam porro dolore, mollitia ex excepturi qui id dolor alias ipsa deleniti a aliquid distinctio reprehenderit? Facilis laborum ut officiis fuga? Doloribus minus facilis obcaecati adipisci excepturi assumenda, in impedit odit soluta eaque aspernatur incidunt ratione, accusantium repellendus dicta necessitatibus. Consequatur dolor sit ea obcaecati incidunt repellat praesentium quo eveniet mollitia maiores repudiandae quasi, dicta modi dolorem velit, ab laborum inventore voluptate corrupti saepe animi vel natus laboriosam! Reiciendis quaerat distinctio laboriosam ratione odio ad mollitia labore facilis cum, sunt dicta maiores aliquid at nisi accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. In a quae culpa iusto perferendis animi repudiandae odio aperiam aut rerum optio quod autem consectetur, molestiae eligendi molestias libero adipisci saepe harum minus officia quos commodi soluta ut! Asperiores assumenda repudiandae dicta? Impedit neque minus veritatis quia beatae earum sunt, ipsum, maxime aspernatur rem aliquam hic autem odit perspiciatis? Eligendi quos, cupiditate eveniet earum nihil, omnis ducimus voluptatum praesentium quidem repudiandae sed autem aspernatur tenetur perferendis voluptas modi. Quis similique tempore harum quia asperiores dicta, hic voluptas sed delectus ducimus et distinctio facilis quam fuga autem odio tenetur soluta velit cum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, blanditiis soluta labore iure a deleniti est ipsam cupiditate minima rem at officiis! Quibusdam animi id consequatur dicta eos nesciunt quod delectus iure esse placeat provident, blanditiis cum unde optio voluptatibus! Rerum nulla a consectetur, vero nam id commodi accusantium, architecto voluptas minus minima, ducimus magnam voluptatem fuga laudantium tempore ut beatae suscipit odit velit! Ea voluptatem consequatur sint ut voluptas quis cum maxime accusantium quos, obcaecati libero temporibus ipsa iste dolorum autem a ex iure veniam dignissimos. Alias pariatur reprehenderit possimus illo porro impedit, sint natus amet voluptatem commodi non!</Text>
                    </View>

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default PrivacyAndPolicy