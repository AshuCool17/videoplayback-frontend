import { UploadVideoComponent } from "./upload-video/upload-video.component";
import { SaveVideoDetailsComponent } from "./save-video-details/save-video-details.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

const routes: Route = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'subscriptions', component: SubscriptionsComponent,
    },
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