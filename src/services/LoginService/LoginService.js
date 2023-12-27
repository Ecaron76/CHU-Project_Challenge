import { supabase } from "../supabase/supabase";


export const LoginService = {

    checkUserPassword: async function (userId, userPassword) {
        try  {

            let { data: challengeInfos, error } = await supabase
                .from('user_challenge')
                .select('*, user(id, chu_id), challenge(password)')
                .eq('user_id', 1);

            const challengePassword = challengeInfos[0].challenge.password;
            return challengePassword === userPassword ? true : false;
        }
        catch (error){
            console.log("An error occured " + error);
        }
    }


  } 