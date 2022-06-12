import React from "react";
import { Header } from 'test-1-dalex/umd/organisms/header/Header';
import { Title } from 'test-1-dalex/umd/molecules/title/Title';
import { Text } from 'test-1-dalex/umd/atoms/text/Text'; 
import { Icon_container } from 'test-1-dalex/umd/molecules/icon_container/Icon_container';
import { Image } from 'test-1-dalex/umd/atoms/image/Image';
import { Empty_div } from 'test-1-dalex/umd/atoms/empty_div/Empty_div';
import { Header_child } from 'test-1-dalex/umd/molecules/header_child/Header_child';
import { Footer_menu } from 'test-1-dalex/umd/molecules/footer_menu/Footer_menu';
import { Footer } from 'test-1-dalex/umd/organisms/footer/Footer';
import ImageFile  from "../img/back.svg";
import ImageHome from '../img/home.svg';
import ImagePantry from '../img/pantry.svg';
import ImageRecipes from '../img/recipes.svg';
import ImageAccount from '../img/account.svg';

const App = () => ( 
    <div>
<>
    <Header children={

      <>
        <Header_child children={
          <Icon_container children={
            
            <Image src = {ImageFile}></Image>}>
            
            </Icon_container>}></Header_child>
            
            <Title width_size = "33.33%" children={
              
                <Text text='My pantry'/>}/>
            
            <Empty_div width_size="33.33%">
            
            </Empty_div>
          </>
          }></Header> 

          <Footer children={

            
            <Footer_menu children={
              <>
                <Image src = {ImageHome} id="home"></Image>
                <Image src = {ImagePantry} id="pantry" status="active"></Image>
                <Image src = {ImageRecipes} id="recipes"></Image>
                <Image src = {ImageAccount} id="account"></Image>
              </>
          }></Footer_menu>
          
        }></Footer>
          </>
    </div>
);

export default App;