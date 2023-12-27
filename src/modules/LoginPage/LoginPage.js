import 
{ 
    View, Button, Text, SafeAreaView, 
    TextInput, TouchableOpacity, Image, 
    ScrollView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { loginStore } from "../../store/loginStore";
import { Formik } from 'formik';
import styles from './Login.styles'
import { Children, useEffect } from 'react';
//import { LoginService } from '../../services/LoginService/LoginService';
import 'react-native-url-polyfill/auto'
import {supabase} from '../../services/supabase/supabase.js';
import { LoginService } from '../../services/LoginService/LoginService';
import * as yup from 'yup'
import { useState } from 'react';




export default function LoginPage() {

    const {id, password, isLogged, setId, setPassword, setIsLogged } = loginStore();

    // const qui garde en mémoire si le user à déja essayé de connecter.
    // permet d'afficher message erreur mot de passe ou identifiant.
    const [triedToLogOnce, setTriedToLogOnce] = useState(false);

    // méthode de vérification que les identifiants sont bien rentré. Utilise librarie yup.
    const loginValidationSchema = yup.object().shape({
        id: yup
          .string()
          .required('Identifiant requis'),
        password: yup
          .string()
          //.min(8, ({ min }) => `Password must be at least ${min} characters`)
          .max(10, ({ max }) => `Le mot de passe ne peut dépasser ${max} charactères`)
          .required('Mot de passe requis'),
      })
      

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <SafeAreaView style={styles.safeAreaView}>
                <Formik
                    validateOnChange={false}
                    validationSchema={loginValidationSchema}
                    initialValues={{ id: "", password: "" }}
                    onSubmit={ async (values) => {

                        setId(values.id);
                        setPassword(values.password);
                        // checkUserPassword va vérifier que le mot de passe entré est le bon et return true si oui
                        const isCorrectPassword = await LoginService.checkUserPassword(values.id, values.password);
                        setTriedToLogOnce(true); // indique que le user a essayé de se connecter mais avec les mauvais identifiants.
                        setIsLogged(isCorrectPassword);
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                    }) => (
                        <View style={styles.loginView}>
                            <View style={styles.logoView}>
                                <Image
                                    style={styles.logo}
                                    source={require('./images/Logo.png')}
                                />
                            </View>
                            <View style={styles.textInputView}>
                                <TextInput
                                    name="id"
                                    style={styles.textInput}
                                    placeholder='Identifiant ...'
                                    placeholderTextColor="#9f9f9f"
                                    onChangeText={handleChange('id')}
                                    value={values.id}
                                />
                                {errors.id &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.id}</Text>
                                }
                                <TextInput
                                    name="password"
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    placeholder='Mot de passe du challenge...'
                                    placeholderTextColor="#9f9f9f" 
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    
                                />
                                {errors.password &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                }
                                {(!isLogged && triedToLogOnce)  && // si mot de passe incorrect on affiche ce message
                                    <Text style={{ fontSize: 10, color: 'red' }}>Identifiant ou mot de passe incorrect</Text>
                                }
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.buttonText}>Se connecter</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottomIcon}>
                                <Image
                                    style={styles.cesiIcon}
                                    source={require('./images/logoCesi.png')}
                                />
                                <Image
                                    style={styles.chuIcon}
                                    source={require('./images/logo-CHU.png')}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        </ScrollView>
    );
}