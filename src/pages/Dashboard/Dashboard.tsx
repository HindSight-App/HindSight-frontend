import {
    IonContent,
    IonPage,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonButtons,
    IonButton,
    IonBackButton,
    IonInput,
    IonSelectOption,
    IonSelect,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonTextarea,
    IonFooter,
    IonList,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
  } from "@ionic/react";
import { moon, thumbsDownOutline, thumbsUpOutline, thumbsUpSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import AvatarIcon from "../../components/AvatarIcon";
import DashboardPost from "../../components/DashboardPost";
import Tabs from "../../components/Tabs";
import { createHindsight, getPosts, getProfile } from "../../services/AuthUtils";
import { client } from "../../services/client";
import { Post, Profile } from "../../Types/types";
  
  import "./Dashboard.css";

  function Dashboard() {
      const [user, setUser] = useState<Profile>()
      const [posts, setPosts] = useState<Post[]>([]);
      
        useEffect(() => {
            let subscription:any = null;
            async function loadPosts() {
              const response = await getPosts();
              setPosts(response);
              subscription = client
                .from(`Posts:visibility=eq.true`)
                .on('INSERT', async (payload) => {
                  console.log('Change received!', payload)
                  setPosts(posts => [payload.new, ...posts]);
                })
                .subscribe();
            }

            async function loadProfile(){
                const response = await getProfile();
                setUser(response);
            }
            loadPosts();
            loadProfile();
            return () => {client.removeSubscription(subscription)}
        }, [])
        
        if (!posts) {
            return null;
          }
          if (!user) {
            return null;
          }
      console.log(posts)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="ideas-page">
            <IonGrid >
                <IonCol class='dashboard-header-img'>
                    <IonTitle>Vision Board</IonTitle>
                    <IonCol class='dashoard-spacer'></IonCol>
                    <AvatarIcon image={user.avatar} />
                </IonCol>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>

                    {posts.map(post =>
                    <IonItem class={post.type}>
                        <DashboardPost key={post.id + post.title} {...post} />
                    </IonItem>
                    )}
                
            </IonList>
        </IonContent>
        <IonFooter>
            <Tabs />
        </IonFooter>
      </IonPage>
    );
    }

  export default Dashboard;
  