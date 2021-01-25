import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Context from "../utils/context";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/hero/Header";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",

}) => {
 

  const context = useContext(Context);
  const [stateLocal, setState] = useState({
    posts: [],
    fetched: false,
    first_page_load: false,
    pages_slice: [1, 2, 3, 4, 5],
    max_page: null,
    items_per_page: 3,

    currentPage: 1,
    num_posts: null,
    posts_slice: null,

    posts_per_page: 3,
  });

  useEffect(() => {
    if (!context.postsState) {
      axios
        .get("http://localhost:4040/api/posts/3")
        .then((res) => context.handleAddPosts(res.data))
        .catch((err) => console.log(err));
    }
    if (context.postsState && !stateLocal.fetched) {
      const indexOfLastPost = 1 * stateLocal.posts_per_page;
      const indexOfFirstPost = indexOfLastPost - stateLocal.posts_per_page;
      const last_page = Math.ceil(
        context.postsState.length / stateLocal.posts_per_page
      );

      setState({
        ...stateLocal,
        fetched: true,
        posts: [...context.postsState],
        num_posts: context.postsState.length,
        max_page: last_page,
        posts_slice: context.postsState.slice(
          indexOfFirstPost,
          indexOfLastPost
        ),
      });
    }
  }, [context, stateLocal]);

  useEffect(() => {
    let page = stateLocal.currentPage;
    let indexOfLastPost = page * 3;
    let indexOfFirstPost = indexOfLastPost - 3;

    setState({
      ...stateLocal,
      posts_slice: stateLocal.posts.slice(indexOfFirstPost, indexOfLastPost),
    });
  }, [stateLocal.currentPage]); //eslint-disable-line

  const add_search_posts_to_state = (posts) => {
    setState({ ...stateLocal, posts_search: [] });
    setState({ ...stateLocal, posts_search: [...posts] });
  };

  const RenderPosts = (post) => (
    <div>
      <Card>
        <CardHeader
          title={
            <Link to={{ pathname: "/post/" + post.post.pid, state: { post } }}>
              {post.post.title}
            </Link>
          }
          subheader={
            <div className="FlexColumn">
              <div className="FlexRow">
                {moment(post.post.dateAt).format("MMMM Do, YYYY | h:mm a")}
              </div>
              <div className="FlexRow">
                By:
                <Link
                  style={{ paddingLeft: "5px", textDecoration: "none" }}
                  to={{
                    pathname: "/user/" + post.post.author,
                    state: { post },
                  }}
                >
                  {post.post.author}
                </Link>
              </div>
              <div className="FlexRow">
                <i className="material-icons">thumb_up</i>
                <div className="notification-num-allposts">
                  {" "}
                  {post.post.likes}{" "}
                </div>
              </div>
            </div>
          }
        />
        <br />
        <CardContent>
          <span style={{ overflow: "hidden" }}> {post.post.body} </span>
        </CardContent>
      </Card>
    </div>
  );

  const page_change = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    //variables for page change
    let next_page = page + 1;
    let prev_page = page - 1;

    //handles general page change
    //if(state.max_page < 5 return null)
    if (page > 2 && page < stateLocal.max_page - 1) {
      setState({
        ...stateLocal,
        currentPage: page,
        pages_slice: [prev_page - 1, prev_page, page, next_page, next_page + 1],
      });
    }
    if (page === 2) {
      setState({
        ...stateLocal,
        currentPage: page,
        pages_slice: [prev_page, page, next_page, next_page + 1, next_page + 2],
      });
    }
    //handles use case for user to go back to first page from another page
    if (page === 1) {
      setState({
        ...stateLocal,
        currentPage: page,
        pages_slice: [
          page,
          next_page,
          next_page + 1,
          next_page + 2,
          next_page + 3,
        ],
      });
    }
    //handles last page change
    if (page === stateLocal.max_page) {
      setState({
        ...stateLocal,
        currentPage: page,
        pages_slice: [
          prev_page - 3,
          prev_page - 2,
          prev_page - 1,
          prev_page,
          page,
        ],
      });
    }
    if (page === stateLocal.max_page - 1) {
      setState({
        ...stateLocal,
        currentPage: page,
        pages_slice: [prev_page - 2, prev_page - 1, prev_page, page, next_page],
      });
    }
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {stateLocal.posts_slice
              ? stateLocal.posts_slice.map((post, index) => (
                  <PostContainer key={index} featured={post.featured}>
                    <Post className="group" as="a" href={post.slug}>
                      <Image imageSrc="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" />
                      <Info>
                        <Category>{post.category}</Category>
                        <CreationDate>{moment(post.createdAt).format("MMMM Do, YYYY | h:mm a")}</CreationDate>
                        <Title>{post.title}</Title>
                        {post.featured && post.description && (
                          <Description>{post.summary}</Description>
                        )}
                      </Info>
                    </Post>
                  </PostContainer>
                ))
              : null}
          </Posts>
          <div >
            <div >
              <button onClick={() => page_change(1)}> First </button>
              <button onClick={() => page_change(stateLocal.currentPage - 1)}>
                {" "}
                Prev{" "}
              </button>
              {stateLocal.pages_slice.map((page) => (
                <div
                  onClick={() => page_change(page)}
                  className={
                    stateLocal.currentPage === page
                      ? "pagination-active"
                      : "pagination-item"
                  }
                  key={page}
                >
                  {page}
                </div>
              ))}
              <button onClick={() => page_change(stateLocal.currentPage + 1)}>
                {" "}
                Next{" "}
              </button>
              <button onClick={() => page_change(stateLocal.max_page)}>
                {" "}
                Last{" "}
              </button>
            </div>
          </div>


        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
