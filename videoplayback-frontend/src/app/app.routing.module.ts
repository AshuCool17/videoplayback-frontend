import { UploadVideoComponent } from "./upload-video/upload-video.component";
import { SaveVideoDetailsComponent } from "./save-video-details/save-video-details.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LikedVideosComponent } from "./liked-videos/liked-videos.component";
import { HistoryComponent } from "./history/history.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { FeaturedComponent } from "./featured/featured.component";

const routes: Route = [
    {
        path: '', component: HomeComponent,
    },
    children: [{
        path: 'subscriptions', component: SubscriptionsComponent,
    },
    {
        path: 'featured', component: FeaturedComponent,
    },
    {
        path: 'history', component: HistoryComponent,
    },
    {
        path: 'likedVideos', component: LikedVideosComponent,
    }],
    {
        path: 'upload-video', component: UploadVideoComponent,
    },
    {
        path: 'save-video-details/:videoId', component: SaveVideoDetailsComponent,
    },
    {
        path: 'video-details/:videoId', component: VideoDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}