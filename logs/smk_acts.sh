#!bin/bash

clean_string()
{
# input parameters
# specify the number of characters in the begining of the string to drop [front]
# specify the number of characters on the end of the string to drop [end]
# specify a string to clean [str_to_clean]

        front=$1 # User specified ammount of characters to drop off the front
        end=$2 # User specified ammount of characters to drop off the end
        str_to_clean=$3 # User specified string to clean

# numeric values for extraction

        str_drop_off_len=$(($front+$end)) # Overall cut length
        pull_length=$((${#str_to_clean}-$str_drop_off_len)) # Overall length

# drop off front of passed in string
        temp_str=${str_to_clean:$front}

# drop off the remainder of the end of the string
        CLEANED_STRING=${temp_str:0:$pull_length}
}

printf "\n\n${green}The current account count on the Smoke Network is...\n"


ret_data=``` curl -s --data '{"jsonrpc": "2.0", "method": "get_account_count", "params": [[ ]], "id": 0 }' 'https://rpc.smoke.io' ```
clean_string 17 1 $ret_data
echo ${CLEANED_STRING} > accounts
exit 1
