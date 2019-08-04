import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxImgZoomModule } from 'ngx-img-zoom';
// Home-one components
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { ServicesComponent } from './home/services/services.component';
import { BlogComponent } from './home/blog/blog.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { LogoComponent } from './home/logo/logo.component';
// Home-two components
import { HomeTwoComponent } from './home-2/home-two.component';
import { SliderTwoComponent } from './home-2/slider/slider.component';
import { ProductSliderTwoComponent } from './home-2/product-slider/product-slider.component';
import { ParallaxBannerTwoComponent } from './home-2/parallax-banner/parallax-banner.component';
import { ProductTabTwoComponent } from './home-2/product-tab/product-tab.component';
// Home-three components
import { HomeThreeComponent } from './home-3/home-three.component';
import { SliderThreeComponent } from './home-3/slider/slider.component';
import { CollectionBannerThreeComponent } from './home-3/collection-banner/collection-banner.component';
import { ProductTabThreeComponent } from './home-3/product-tab/product-tab.component';
import { ParallaxBannerThreeComponent } from './home-3/parallax-banner/parallax-banner.component';
import { VerticalSlidersComponent } from './home-3/vertical-sliders/vertical-sliders.component';
import { InstagramThreeComponent } from './home-3/instagram/instagram.component';
// Home-four components
import { HomeFourComponent } from './home-4/home-four.component';
import { SliderFourComponent } from './home-4/slider/slider.component';
import { ServicesFourComponent } from './home-4/services/services.component';
import { ProductSliderFourComponent } from './home-4/product-slider/product-slider.component';
import { ParallaxBannerFourComponent } from './home-4/parallax-banner/parallax-banner.component';
import { SpecialProductsComponent } from './home-4/special-products/special-products.component';
import { BlogFourComponent } from './home-4/blog/blog.component';
// Home-five components
import { HomeFiveComponent } from './home-5/home-five.component';
import { SliderFiveComponent } from './home-5/slider/slider.component';
import { LogoFiveComponent } from './home-5/logo/logo.component';
import { BannerComponent } from './home-5/banner/banner.component';
import { CollectionSliderComponent } from './home-5/collection-slider/collection-slider.component';
import { ProductTabFiveComponent } from './home-5/product-tab/product-tab.component';
import { ProductSliderFiveComponent } from './home-5/product-slider/product-slider.component';
import { CollectionBannerFiveComponent } from './home-5/collection-banner/collection-banner.component';
import { SpecialProductsFiveComponent } from './home-5/special-products/special-products.component';
import { BlogFiveComponent } from './home-5/blog/blog.component';
import { ServicesFiveComponent } from './home-5/services/services.component';
import { InstagramFiveComponent } from './home-5/instagram/instagram.component';
// Home-six components
import { HomeSixComponent } from './home-6/home-six.component';
import { SliderSixComponent } from './home-6/slider/slider.component';
import { CollectionBannerSixComponent } from './home-6/collection-banner/collection-banner.component';
import { ProductTabSixComponent } from './home-6/product-tab/product-tab.component';
import { ParallaxBannerSixComponent } from './home-6/parallax-banner/parallax-banner.component';
import { BlogSixComponent } from './home-6/blog/blog.component';
// Home-seven components
import { HomeSevenComponent } from './home-7/home-seven.component';
import { SliderSevenComponent } from './home-7/slider/slider.component';
import { CollectionBannerSevenComponent } from './home-7/collection-banner/collection-banner.component';
import { SpecialProductsSevenComponent } from './home-7/special-products/special-products.component';
import { ProductTabSevenComponent } from './home-7/product-tab/product-tab.component';
import { ProductSliderSevenComponent } from './home-7/product-slider/product-slider.component';
import { BlogSevenComponent } from './home-7/blog/blog.component';
import { ServicesSevenComponent } from './home-7/services/services.component';
import { InstagramSevenComponent } from './home-7/instagram/instagram.component';
// home-eight components
import { HomeEightComponent } from './home-8/home-eight.component';
import { SliderEightComponent } from './home-8/slider/slider.component';
import { AboutUsComponent } from './home-8/about-us/about-us.component';
import { ProductSliderEightComponent } from './home-8/product-slider/product-slider.component';
import { VideoComponent } from './home-8/video/video.component';
import { BlogEightComponent } from './home-8/blog/blog.component';
import { InstagramEightComponent } from './home-8/instagram/instagram.component';
// home-nine components
import { HomeNineComponent } from './home-9/home-nine.component';
import { HomeBannerComponent } from './home-9/home-banner/home-banner.component';
import { CollectionBannerNineComponent } from './home-9/collection-banner/collection-banner.component';
import { ProductTabNineComponent } from './home-9/product-tab/product-tab.component';
// home-ten components
import { HomeTenComponent } from './home-10/home-ten.component';
import { SliderTenComponent } from './home-10/slider/slider.component';
import { LogoTenComponent } from './home-10/logo/logo.component';
import { CollectionBannerTenComponent } from './home-10/collection-banner/collection-banner.component';
import { ProductSliderTenComponent } from './home-10/product-slider/product-slider.component';
import { ParallaxBannerTenComponent } from './home-10/parallax-banner/parallax-banner.component';
import { BlogTenComponent } from './home-10/blog/blog.component';
// home-eleven components
import { HomeElevenComponent } from './home-11/home-eleven.component';
import { SliderElevenComponent } from './home-11/slider/slider.component';
import { MetroProductComponent } from './home-11/metro-product/metro-product.component';
import { ServicesElevenComponent } from './home-11/services/services.component';
import { BlogElevenComponent } from './home-11/blog/blog.component';
import { InstagramElevenComponent } from './home-11/instagram/instagram.component';
import { LogoElevenComponent } from './home-11/logo/logo.component';
// home-twelve components
import { HomeTwelveComponent } from './home-12/home-twelve.component';
import { SliderTwelveComponent } from './home-12/slider/slider.component';
import { CollectionBannerTwelveComponent } from './home-12/collection-banner/collection-banner.component';
import { ProductCollectionComponent } from './home-12/product-collection/product-collection.component';
import { SpecialProductsTwelveComponent } from './home-12/special-products/special-products.component';
import { BlogTwelveComponent } from './home-12/blog/blog.component';
import { InstagramTwelveComponent } from './home-12/instagram/instagram.component';
import { LogoTwelveComponent } from './home-12/logo/logo.component';
// home-thirteen components
import { HomeThirteenComponent } from './home-13/home-thirteen.component';
import { SliderThirteenComponent } from './home-13/slider/slider.component';
import { AboutComponent } from './home-13/about/about.component';
import { CollectionSliderThirteenComponent } from './home-13/collection-slider/collection-slider.component';
import { PopularProductsComponent } from './home-13/popular-products/popular-products.component';
import { FilterProductsComponent } from './home-13/filter-products/filter-products.component';
import { ProductTabThirteenComponent } from './home-13/product-tab/product-tab.component';
import { LogoThirteenComponent } from './home-13/logo/logo.component';
// home-fourteen components
import { HomeFourteenComponent } from './home-14/home-fourteen.component';
import { SliderFourteenComponent } from './home-14/slider/slider.component';
import { AboutFourteenComponent } from './home-14/about/about.component';
import { CollectionBannerFourteenComponent } from './home-14/collection-banner/collection-banner.component';
import { InformationComponent } from './home-14/information/information.component';
import { ProductSliderFourteenComponent } from './home-14/product-slider/product-slider.component';
import { ProductTabFourteenComponent } from './home-14/product-tab/product-tab.component';
import { BlogFourteenComponent } from './home-14/blog/blog.component';
import { LogoFourteenComponent } from './home-14/logo/logo.component';
// Products Components 
import { ProductComponent } from './product/product.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductBoxHoverComponent } from './product/product-box-hover/product-box-hover.component';
import { ProductBoxVerticalComponent } from './product/product-box-vertical/product-box-vertical.component';
import { ProductBoxMetroComponent } from './product/product-box-metro/product-box-metro.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { ProductNoSidebarComponent } from './product/product-details/product-no-sidebar/product-no-sidebar.component';
import { ProductColLeftComponent } from './product/product-details/product-col-left/product-col-left.component';
import { ProductColRightComponent } from './product/product-details/product-col-right/product-col-right.component';
import { ProductColumnComponent } from './product/product-details/product-column/product-column.component';
import { ProductAccordianComponent } from './product/product-details/product-accordian/product-accordian.component';
import { ProductLeftImageComponent } from './product/product-details/product-left-image/product-left-image.component';
import { ProductRightImageComponent } from './product/product-details/product-right-image/product-right-image.component';
import { ProductVerticalTabComponent } from './product/product-details/product-vertical-tab/product-vertical-tab.component';
import { RelatedProductsComponent } from './product/product-details/related-products/related-products.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { QuickViewComponent } from './product/widgets/quick-view/quick-view.component';
import { ModalCartComponent } from './product/widgets/modal-cart/modal-cart.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';
import { ExitPopupComponent } from './product/widgets/exit-popup/exit-popup.component';
import { AgeVerificationComponent } from './product/widgets/age-verification/age-verification.component';
import { NewsletterComponent } from './product/widgets/newsletter/newsletter.component';

@NgModule({
  exports: [ExitPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    RangeSliderModule,
    InfiniteScrollModule,
    NgxPayPalModule,
    NgxImgZoomModule
  ],
  declarations: [
    // Home one
    HomeComponent,
    SliderComponent,
    CollectionBannerComponent,
    ProductSliderComponent,
    ParallaxBannerComponent,
    ProductTabComponent,
    ServicesComponent,
    BlogComponent,
    InstagramComponent,
    LogoComponent,
    // Home two
    HomeTwoComponent,
    SliderTwoComponent,
    ProductSliderTwoComponent,
    ParallaxBannerTwoComponent,
    ProductTabTwoComponent,
    // Home three
    HomeThreeComponent,
    SliderThreeComponent,
    CollectionBannerThreeComponent,
    ProductTabThreeComponent,
    ParallaxBannerThreeComponent,
    VerticalSlidersComponent,
    InstagramThreeComponent,
    // Home four
    HomeFourComponent,
    SliderFourComponent,
    ServicesFourComponent,
    ProductSliderFourComponent,
    ParallaxBannerFourComponent,
    SpecialProductsComponent,
    BlogFourComponent,
    // Home five
    HomeFiveComponent,
    SliderFiveComponent,
    LogoFiveComponent,
    BannerComponent,
    CollectionSliderComponent,
    ProductTabFiveComponent,
    ProductSliderFiveComponent,
    CollectionBannerFiveComponent,
    SpecialProductsFiveComponent,
    BlogFiveComponent,
    ServicesFiveComponent,
    InstagramFiveComponent,
    // Home Six
    HomeSixComponent,
    SliderSixComponent,
    CollectionBannerSixComponent,
    ProductTabSixComponent,
    ParallaxBannerSixComponent,
    BlogSixComponent,
    // Home Seven
    HomeSevenComponent,
    SliderSevenComponent,
    CollectionBannerSevenComponent,
    SpecialProductsSevenComponent,
    ProductTabSevenComponent,
    ProductSliderSevenComponent,
    BlogSevenComponent,
    ServicesSevenComponent,
    InstagramSevenComponent,
    // Home Eight
    HomeEightComponent,
    SliderEightComponent,
    AboutUsComponent,
    ProductSliderEightComponent,
    VideoComponent,
    BlogEightComponent,
    InstagramEightComponent,
    // Home Nine
    HomeNineComponent,
    HomeBannerComponent,
    CollectionBannerNineComponent,
    ProductTabNineComponent,
    // Home Ten
    HomeTenComponent,
    SliderTenComponent,
    LogoTenComponent,
    CollectionBannerTenComponent,
    ProductSliderTenComponent,
    ParallaxBannerTenComponent,
    BlogTenComponent,
    // home eleven
    HomeElevenComponent,
    SliderElevenComponent,
    MetroProductComponent,
    ServicesElevenComponent,
    BlogElevenComponent,
    InstagramElevenComponent,
    LogoElevenComponent,
    // home twelve
    HomeTwelveComponent,
    SliderTwelveComponent,
    CollectionBannerTwelveComponent,
    ProductCollectionComponent,
    SpecialProductsTwelveComponent,
    BlogTwelveComponent,
    InstagramTwelveComponent,
    LogoTwelveComponent,
    // home thirteen
    HomeThirteenComponent,
    SliderThirteenComponent,
    AboutComponent,
    CollectionSliderThirteenComponent,
    PopularProductsComponent,
    FilterProductsComponent,
    ProductTabThirteenComponent,
    LogoThirteenComponent,
    // home fourteen
    HomeFourteenComponent,
    SliderFourteenComponent,
    AboutFourteenComponent,
    CollectionBannerFourteenComponent,
    InformationComponent,
    ProductSliderFourteenComponent,
    ProductTabFourteenComponent,
    BlogFourteenComponent,
    LogoFourteenComponent,
    // Product
    ProductComponent,
    ProductBoxComponent,
    ProductBoxHoverComponent,
    ProductBoxVerticalComponent,
    ProductBoxMetroComponent,
    CollectionLeftSidebarComponent,
    CollectionRightSidebarComponent,
    CollectionNoSidebarComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    ProductLeftSidebarComponent,
    ProductRightSidebarComponent,
    ProductNoSidebarComponent,
    ProductColLeftComponent,
    ProductColRightComponent,
    ProductColumnComponent,
    ProductAccordianComponent,
    ProductLeftImageComponent,
    ProductRightImageComponent,
    ProductVerticalTabComponent,
    RelatedProductsComponent,
    SidebarComponent,
    CategoriesComponent,
    QuickViewComponent,
    ModalCartComponent,
    NewProductComponent,
    SearchComponent,
    ProductCompareComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    ExitPopupComponent,
    AgeVerificationComponent,
    NewsletterComponent
  ]
})
export class ShopModule { }
