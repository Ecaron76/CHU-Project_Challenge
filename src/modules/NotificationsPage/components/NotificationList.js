import {ScrollView} from 'react-native';
import NotificationsBox from "./NotificationBox";

export default function NotificationsList() {

    return (
        <ScrollView>
            // TODO : Add loop and get messages with sent == True from database
            <NotificationsBox/>
            <NotificationsBox/>
        </ScrollView>
    );
}