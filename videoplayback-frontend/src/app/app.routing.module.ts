import { UploadVideoComponent } from "./upload-video/upload-video.component";
import { NgModule } from "@angular/core";

const routes: Route = [
    {
        path: 'upload-video', component: UploadVideoComponent,
    },
    {
        path: 'save-video-details/:videoId', component: SaveVideoDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}