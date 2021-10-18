import { aadharBlogData } from './LinkWithAadhar';
import { linkMobileToAadhar } from './LinkMobileToAadhar';
import { linkPan } from './LinkPan';
import { buildCreditScore } from './BuildCreditScore';

export const blogContentMapper = {
    'link-with-aadhar': aadharBlogData,
    'link-mobile-number-to-aadhar': linkMobileToAadhar,
    'link-pan': linkPan,
    'build-credit-score': buildCreditScore,
}
export function getContent(requestedBlog) {

if(blogContentMapper[requestedBlog]){
    return blogContentMapper[requestedBlog];
} else {
    return null;
}
}