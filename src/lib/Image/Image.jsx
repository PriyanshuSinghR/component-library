import {
  ComponentContainer,
  SectionHeader,
  Sidebar
} from "../../documentation";
import { Image, RoundImage } from "../../components";

export const ImageDoc = () => {
  const respImageCodeString = `<Image 
      srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316"
      altText="Landscape"
/>

<Image
      srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316"
      altText="Landscape"
      width="500px"
      height="200px"
/>`;

  const roundImageCodeString = `<RoundImage 
      srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316"
      altText="Landscape"
/>

<RoundImage
      srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316"
      altText="Landscape"
      size="200px"  
/>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Image Component"
          description="An image can be reponsive, which fits in all screen sizes. Images can also be round and square."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Responsive Image"
          description="A responsive image will adapt to the width of it's parent container. Resize the brower window to see the image behave responsive. You can set custom width of the resp-img class, and the img will be responsive wrt to it."
          codeString={respImageCodeString}
          column
        >
          <Image
            srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dfssp88-f1817799-321d-427f-a84c-57891b5cd211.png/v1/fill/w_1068,h_748,q_70,strp/one_piece_wano_kuni_wallpaper_by_bodskih_dfssp88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjgwNCIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGZzc3A4OC1mMTgxNzc5OS0zMjFkLTQyN2YtYTg0Yy01Nzg5MWI1Y2QyMTEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4jv5g86ZRLYUo0i21snC8x5v6afVec3Hk0uGda8pmHg"
            altText="Landscape"
          />
          <Image
            srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dfssp88-f1817799-321d-427f-a84c-57891b5cd211.png/v1/fill/w_1068,h_748,q_70,strp/one_piece_wano_kuni_wallpaper_by_bodskih_dfssp88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjgwNCIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGZzc3A4OC1mMTgxNzc5OS0zMjFkLTQyN2YtYTg0Yy01Nzg5MWI1Y2QyMTEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4jv5g86ZRLYUo0i21snC8x5v6afVec3Hk0uGda8pmHg"
            altText="Landscape"
            width="500px"
            height="200px"
          />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Round Image"
          description="A round image is circular in shape, and has the default size of 300 X 300px."
          codeString={roundImageCodeString}
        >
          <RoundImage
            srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dfssp88-f1817799-321d-427f-a84c-57891b5cd211.png/v1/fill/w_1068,h_748,q_70,strp/one_piece_wano_kuni_wallpaper_by_bodskih_dfssp88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjgwNCIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGZzc3A4OC1mMTgxNzc5OS0zMjFkLTQyN2YtYTg0Yy01Nzg5MWI1Y2QyMTEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4jv5g86ZRLYUo0i21snC8x5v6afVec3Hk0uGda8pmHg"
            altText="Landscape"
          />
          <RoundImage
            srcImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dfssp88-f1817799-321d-427f-a84c-57891b5cd211.png/v1/fill/w_1068,h_748,q_70,strp/one_piece_wano_kuni_wallpaper_by_bodskih_dfssp88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjgwNCIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGZzc3A4OC1mMTgxNzc5OS0zMjFkLTQyN2YtYTg0Yy01Nzg5MWI1Y2QyMTEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4jv5g86ZRLYUo0i21snC8x5v6afVec3Hk0uGda8pmHg"
            altText="Landscape"
            size="200px"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
