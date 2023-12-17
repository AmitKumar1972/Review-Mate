import express from "express";
import {
  addRating,
  createReviewRequest,
  getAllReviews,
  reviewsReceivedCount,
  allProductsRating,
  reviewsSentCount,
  overallRating,
  productRatingDistribution,
} from "../controllers/reviewController";

const router = express.Router();

router.get("/create", createReviewRequest);

router.get("/addRating", addRating);

router.get("/getAllReviews", getAllReviews);

router.get("/reviewsReceivedCount", reviewsReceivedCount);

router.get("/allProductsRating", allProductsRating);

router.get("/reviewsSentCount", reviewsSentCount);

router.get("/overallRating", overallRating);

router.get("/starRatingDistribution/:productId", productRatingDistribution);
router.get("/starRatingDistribution/:productId", productRatingDistribution);

export default router;
