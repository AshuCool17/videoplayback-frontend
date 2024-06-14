import { UploadVideoComponent } from "./upload-video/upload-video.component";
import { SaveVideoDetailsComponent } from "./save-video-details/save-video-details.component";
import { NgModule } from "@angular/core";

const routes: Route = [
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