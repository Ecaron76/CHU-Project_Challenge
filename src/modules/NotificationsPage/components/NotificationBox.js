import {View, Text, Image, Pressable, Modal} from 'react-native';
import styles from "../../NotificationsPage/Notification.styles";
import {useState} from "react";

export default function NotificationsBox() {

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (
        <View>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image
                            style={styles.image}
                            source={require('../images/doctor.png')}
                        />
                        <Text style={styles.modalHeaderMessage}>
                            // TODO : Add user from message database
                            Message du CHU
                        </Text>
                        <Text style={styles.modalMessage}>
                            // TODO : Add message from database
                            In this example, the numberOf Lin es={2} property
                            is a dded to the Text component, which limits the tex
                            t to two lines. Additionally,
                        </Text>
                        <Pressable onPress={closeModal}>
                            <Text style={styles.closeButton}>Fermer</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={openModal} style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../images/doctor.png')}
                />
                <View style={styles.textContainer}>
                <Text  style={styles.message} numberOfLines={3}>
                    // TODO : Add message from database
                    In this example, the numberOf Lin es={2} property
                    is a dded to the Text component, which limits the tex
                    t to two lines. Additioied number of lines.
                </Text>
                </View>
            </Pressable>
        </View>
    );
}