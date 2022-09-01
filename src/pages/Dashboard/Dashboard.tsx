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
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from "@ionic/react";
import { useEffect, useState } from "react";
import AvatarIcon from "../../components/AvatarIcon";
import DashboardPost from "../../components/DashboardPost";
import Tabs from "../../components/Tabs";
import { getPosts, getProfile } from "../../services/AuthUtils";
import { client } from "../../services/client";
import { Post, Profile } from "../../Types/types";
import { logout } from "../../services/AuthUtils";
import { personCircleOutline, logOutOutline } from "ionicons/icons";
import { useHistory } from "react-router";

import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState<Profile>();
  const [posts, setPosts] = useState<Post[]>([]);
  const { push } = useHistory();
  useEffect(() => {
    let subscription: any = null;
    async function loadPosts() {
      const response = await getPosts();
      setPosts(response);
      subscription = client
        .from(`Posts:visibility=eq.true`)
        .on("INSERT", async (payload) => {
          setPosts((posts) => [payload.new, ...posts]);
        })
        .subscribe();
    }

    async function loadProfile() {
      const response = await getProfile();
      setUser(response);
    }
    loadProfile();
    loadPosts();
    return () => {
      client.removeSubscription(subscription);
    };
  }, []);

  const filterdPosts = posts.filter((post: any) => {
    return post.user_id !== user?.user_id;
  });

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
          <IonGrid>
            <IonCol class="dashboard-header-img">
              <IonTitle>Vision Board</IonTitle>
              <IonCol class="dashboard-spacer"></IonCol>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton class="ion-justify-content-center ion-align-items-center">
            <AvatarIcon {...user} />
          </IonFabButton>
          <IonFabList>
            <IonFabButton color={"success"}>
              <IonIcon
                class="local-icon"
                icon={personCircleOutline}
                onClick={() => push("/profile")}
              />
            </IonFabButton>
            <IonFabButton color={"dark"}>
              <IonIcon
                class="local-icon"
                icon={logOutOutline}
                onClick={() => logout()}
              />
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <IonList>
          {filterdPosts.map((post) => (
            <div>
              <DashboardPost
                key={post.id + post.title + post.description}
                {...post}
              />
            </div>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <Tabs />
      </IonFooter>
    </IonPage>
  );
}

export default Dashboard;
