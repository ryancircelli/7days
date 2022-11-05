import React, { useState } from 'react';
import { Box, Heading, Link, IconButton, FormControl, WarningOutlineIcon, InputRightAddon, Pressable, Input } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { updateEventPrivate } from '../../../hooks/events'

export const Url = ({item, prop, getEvents}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);
  const handleChange = text => {
    setValue(text);
    setValid(IsURL(text))
  }

  let curUrl = item.extendedProperties?.private[prop.name.toLowerCase()]

  if (!show) return (
    <Box 
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        aligntems: 'center',
        flexDirection: 'row'
      }}
    >
      <Link href={curUrl}>
        {curUrl}
      </Link>
      <IconButton 
        width={4}
        height={4}
        _icon={{
          as: FontAwesome,
          name: "pencil",
        }} 
        onPress={() => setShow(true)}
      />
    </Box>
  )

  return (
    <Box 
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        aligntems: 'center',
        flexDirection: 'row'
      }}
    >
      <FormControl isInvalid={!valid} w="100%" height="100%">
        <Input 
          w="100%"
          placeholder={item.extendedProperties?.private[prop.name.toLowerCase()]}
          onChangeText={handleChange}
          InputRightElement={
            <IconButton 
              width={4}
              height={4}
              _icon={{
                as: FontAwesome,
                name: "save",
              }} 
              onPress={async () => {
                if (value !== curUrl) {
                  let newUrl = {...item.extendedProperties?.private}
                  newUrl[prop.name.toLowerCase()] = withHttp(value);
                  await updateEventPrivate(item, newUrl)
                  await getEvents();
                  setShow(false)
                }
              }}
            />
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Invalid Url
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

const withHttp = url => !/^https?:\/\//i.test(url) ? `http://${url}` : url;

function IsURL(url) {
  var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
      + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
      + "(([0-9]{1,3}\.){3}[0-9]{1,3}"
      + "|"
      + "([0-9a-z_!~*'()-]+\.)*"
      + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\."
      + "[a-z]{2,6})"
      + "(:[0-9]{1,4})?"
      + "((/?)|"
      + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
   var re=new RegExp(strRegex);
   return re.test(url);
}