import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCol,
    IonGrid,
    IonFooter,
    IonList,
  } from "@ionic/react";
import { useEffect, useState } from "react";
import AvatarIcon from "../../components/AvatarIcon";
import DashboardPost from "../../components/DashboardPost";
import Tabs from "../../components/Tabs";
import { getPosts, getProfile } from "../../services/AuthUtils";
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
                  setPosts(posts => [payload.new, ...posts]);
                })
                .subscribe();
            }

            async function loadProfile(){
                const response = await getProfile();
                setUser(response);
            }
            loadProfile();
            loadPosts();
            return () => {client.removeSubscription(subscription)}
        }, [])
        
        const filterdPosts = posts.filter((post:any) => {
          return post.user_id !== user?.user_id
        })

        if (!posts) {
            return null;
          }
          if (!user) {
            return null;
          }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="new-background-color">
            <IonGrid >
                <IonCol class='dashboard-header-img'>
                    <IonTitle>Vision Board</IonTitle>
                    <IonCol class='dashboard-spacer'></IonCol>
                    <AvatarIcon {...user} />
                </IonCol>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>

                    {filterdPosts.map(post =>
                    <div >
                        <DashboardPost key={post.id + post.title + post.description} {...post} />
                    </div>
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
  