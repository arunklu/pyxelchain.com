export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  JSON: any
  Upload: any
}

export type Article = {
  __typename?: 'Article'
  TLDR: Scalars['String']
  article_tags?: Maybe<TagRelationResponseCollection>
  author?: Maybe<AuthorEntityResponse>
  blogBody: Scalars['String']
  blogImage: UploadFileEntityResponse
  createdAt?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedDate: Scalars['Date']
  related_articles?: Maybe<ArticleRelationResponseCollection>
  seo?: Maybe<ComponentArticlesSeo>
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ArticleArticle_TagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ArticleRelated_ArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ArticleEntity = {
  __typename?: 'ArticleEntity'
  attributes?: Maybe<Article>
  id?: Maybe<Scalars['ID']>
}

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse'
  data?: Maybe<ArticleEntity>
}

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection'
  data: Array<ArticleEntity>
  meta: ResponseCollectionMeta
}

export type ArticleFiltersInput = {
  TLDR?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  article_tags?: InputMaybe<TagFiltersInput>
  author?: InputMaybe<AuthorFiltersInput>
  blogBody?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ArticleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  publishedDate?: InputMaybe<DateFilterInput>
  related_articles?: InputMaybe<ArticleFiltersInput>
  seo?: InputMaybe<ComponentArticlesSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ArticleInput = {
  TLDR?: InputMaybe<Scalars['String']>
  article_tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  author?: InputMaybe<Scalars['ID']>
  blogBody?: InputMaybe<Scalars['String']>
  blogImage?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedDate?: InputMaybe<Scalars['Date']>
  related_articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  seo?: InputMaybe<ComponentArticlesSeoInput>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection'
  data: Array<ArticleEntity>
}

export type Author = {
  __typename?: 'Author'
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  profileImage?: Maybe<UploadFileEntityResponse>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  userName: Scalars['String']
}

export type AuthorArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type AuthorEntity = {
  __typename?: 'AuthorEntity'
  attributes?: Maybe<Author>
  id?: Maybe<Scalars['ID']>
}

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse'
  data?: Maybe<AuthorEntity>
}

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection'
  data: Array<AuthorEntity>
  meta: ResponseCollectionMeta
}

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<AuthorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  userName?: InputMaybe<StringFilterInput>
}

export type AuthorInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  email?: InputMaybe<Scalars['String']>
  profileImage?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  userName?: InputMaybe<Scalars['String']>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type CmsAnalyzerAnalyse = {
  __typename?: 'CmsAnalyzerAnalyse'
  apiName?: Maybe<Scalars['String']>
  contentKind?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  depth?: Maybe<Scalars['Int']>
  documentFields?: Maybe<Scalars['JSON']>
  documentId?: Maybe<Scalars['Int']>
  frontUrl?: Maybe<Scalars['String']>
  isChecked?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  screenshot?: Maybe<Scalars['String']>
  seoAnalyse?: Maybe<Scalars['JSON']>
  tags?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CmsAnalyzerAnalyseEntity = {
  __typename?: 'CmsAnalyzerAnalyseEntity'
  attributes?: Maybe<CmsAnalyzerAnalyse>
  id?: Maybe<Scalars['ID']>
}

export type CmsAnalyzerAnalyseEntityResponse = {
  __typename?: 'CmsAnalyzerAnalyseEntityResponse'
  data?: Maybe<CmsAnalyzerAnalyseEntity>
}

export type CmsAnalyzerAnalyseEntityResponseCollection = {
  __typename?: 'CmsAnalyzerAnalyseEntityResponseCollection'
  data: Array<CmsAnalyzerAnalyseEntity>
  meta: ResponseCollectionMeta
}

export type CmsAnalyzerAnalyseFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerAnalyseFiltersInput>>>
  apiName?: InputMaybe<StringFilterInput>
  contentKind?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  depth?: InputMaybe<IntFilterInput>
  documentFields?: InputMaybe<JsonFilterInput>
  documentId?: InputMaybe<IntFilterInput>
  frontUrl?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  isChecked?: InputMaybe<BooleanFilterInput>
  key?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CmsAnalyzerAnalyseFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerAnalyseFiltersInput>>>
  screenshot?: InputMaybe<StringFilterInput>
  seoAnalyse?: InputMaybe<JsonFilterInput>
  tags?: InputMaybe<JsonFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CmsAnalyzerAnalyseInput = {
  apiName?: InputMaybe<Scalars['String']>
  contentKind?: InputMaybe<Scalars['String']>
  depth?: InputMaybe<Scalars['Int']>
  documentFields?: InputMaybe<Scalars['JSON']>
  documentId?: InputMaybe<Scalars['Int']>
  frontUrl?: InputMaybe<Scalars['String']>
  isChecked?: InputMaybe<Scalars['Boolean']>
  key?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
  screenshot?: InputMaybe<Scalars['String']>
  seoAnalyse?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Scalars['JSON']>
}

export type CmsAnalyzerMatch = {
  __typename?: 'CmsAnalyzerMatch'
  apiName?: Maybe<Scalars['String']>
  componentName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  dynamicZoneName?: Maybe<Scalars['String']>
  fieldName?: Maybe<Scalars['String']>
  isMultipleDoc?: Maybe<Scalars['Boolean']>
  status?: Maybe<Scalars['String']>
  tagName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CmsAnalyzerMatchEntity = {
  __typename?: 'CmsAnalyzerMatchEntity'
  attributes?: Maybe<CmsAnalyzerMatch>
  id?: Maybe<Scalars['ID']>
}

export type CmsAnalyzerMatchEntityResponse = {
  __typename?: 'CmsAnalyzerMatchEntityResponse'
  data?: Maybe<CmsAnalyzerMatchEntity>
}

export type CmsAnalyzerMatchEntityResponseCollection = {
  __typename?: 'CmsAnalyzerMatchEntityResponseCollection'
  data: Array<CmsAnalyzerMatchEntity>
  meta: ResponseCollectionMeta
}

export type CmsAnalyzerMatchFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerMatchFiltersInput>>>
  apiName?: InputMaybe<StringFilterInput>
  componentName?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  dynamicZoneName?: InputMaybe<StringFilterInput>
  fieldName?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  isMultipleDoc?: InputMaybe<BooleanFilterInput>
  not?: InputMaybe<CmsAnalyzerMatchFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerMatchFiltersInput>>>
  status?: InputMaybe<StringFilterInput>
  tagName?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CmsAnalyzerMatchInput = {
  apiName?: InputMaybe<Scalars['String']>
  componentName?: InputMaybe<Scalars['String']>
  dynamicZoneName?: InputMaybe<Scalars['String']>
  fieldName?: InputMaybe<Scalars['String']>
  isMultipleDoc?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<Scalars['String']>
  tagName?: InputMaybe<Scalars['String']>
}

export type CmsAnalyzerMedia = {
  __typename?: 'CmsAnalyzerMedia'
  alt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  data?: Maybe<Scalars['JSON']>
  frontUrl?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  mediaUrl?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  width?: Maybe<Scalars['Int']>
}

export type CmsAnalyzerMediaEntity = {
  __typename?: 'CmsAnalyzerMediaEntity'
  attributes?: Maybe<CmsAnalyzerMedia>
  id?: Maybe<Scalars['ID']>
}

export type CmsAnalyzerMediaEntityResponse = {
  __typename?: 'CmsAnalyzerMediaEntityResponse'
  data?: Maybe<CmsAnalyzerMediaEntity>
}

export type CmsAnalyzerMediaEntityResponseCollection = {
  __typename?: 'CmsAnalyzerMediaEntityResponseCollection'
  data: Array<CmsAnalyzerMediaEntity>
  meta: ResponseCollectionMeta
}

export type CmsAnalyzerMediaFiltersInput = {
  alt?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerMediaFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  data?: InputMaybe<JsonFilterInput>
  frontUrl?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mediaUrl?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CmsAnalyzerMediaFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerMediaFiltersInput>>>
  status?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type CmsAnalyzerMediaInput = {
  alt?: InputMaybe<Scalars['String']>
  data?: InputMaybe<Scalars['JSON']>
  frontUrl?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mediaUrl?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type CmsAnalyzerSummary = {
  __typename?: 'CmsAnalyzerSummary'
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  frontUrl?: Maybe<Scalars['String']>
  nbErrorHigh?: Maybe<Scalars['Int']>
  nbErrorLow?: Maybe<Scalars['Int']>
  nbUrl?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<Scalars['String']>
}

export type CmsAnalyzerSummaryEntity = {
  __typename?: 'CmsAnalyzerSummaryEntity'
  attributes?: Maybe<CmsAnalyzerSummary>
  id?: Maybe<Scalars['ID']>
}

export type CmsAnalyzerSummaryEntityResponse = {
  __typename?: 'CmsAnalyzerSummaryEntityResponse'
  data?: Maybe<CmsAnalyzerSummaryEntity>
}

export type CmsAnalyzerSummaryEntityResponseCollection = {
  __typename?: 'CmsAnalyzerSummaryEntityResponseCollection'
  data: Array<CmsAnalyzerSummaryEntity>
  meta: ResponseCollectionMeta
}

export type CmsAnalyzerSummaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CmsAnalyzerSummaryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  date?: InputMaybe<DateTimeFilterInput>
  frontUrl?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  nbErrorHigh?: InputMaybe<IntFilterInput>
  nbErrorLow?: InputMaybe<IntFilterInput>
  nbUrl?: InputMaybe<IntFilterInput>
  not?: InputMaybe<CmsAnalyzerSummaryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CmsAnalyzerSummaryFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<StringFilterInput>
}

export type CmsAnalyzerSummaryInput = {
  date?: InputMaybe<Scalars['DateTime']>
  frontUrl?: InputMaybe<Scalars['String']>
  nbErrorHigh?: InputMaybe<Scalars['Int']>
  nbErrorLow?: InputMaybe<Scalars['Int']>
  nbUrl?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<Scalars['String']>
}

export type ComponentArticlesSeo = {
  __typename?: 'ComponentArticlesSeo'
  id: Scalars['ID']
  metadescription: Scalars['String']
  metatitle: Scalars['String']
}

export type ComponentArticlesSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArticlesSeoFiltersInput>>>
  metadescription?: InputMaybe<StringFilterInput>
  metatitle?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentArticlesSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentArticlesSeoFiltersInput>>>
}

export type ComponentArticlesSeoInput = {
  id?: InputMaybe<Scalars['ID']>
  metadescription?: InputMaybe<Scalars['String']>
  metatitle?: InputMaybe<Scalars['String']>
}

export type ComponentPodcastPodcastLinks = {
  __typename?: 'ComponentPodcastPodcastLinks'
  amazon?: Maybe<Scalars['String']>
  apple?: Maybe<Scalars['String']>
  google?: Maybe<Scalars['String']>
  id: Scalars['ID']
  listennotes?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  stitcher?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type ComponentPodcastPodcastLinksFiltersInput = {
  amazon?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentPodcastPodcastLinksFiltersInput>>>
  apple?: InputMaybe<StringFilterInput>
  google?: InputMaybe<StringFilterInput>
  listennotes?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPodcastPodcastLinksFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPodcastPodcastLinksFiltersInput>>>
  spotify?: InputMaybe<StringFilterInput>
  stitcher?: InputMaybe<StringFilterInput>
  youtube?: InputMaybe<StringFilterInput>
}

export type ComponentPodcastPodcastLinksInput = {
  amazon?: InputMaybe<Scalars['String']>
  apple?: InputMaybe<Scalars['String']>
  google?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  listennotes?: InputMaybe<Scalars['String']>
  spotify?: InputMaybe<Scalars['String']>
  stitcher?: InputMaybe<Scalars['String']>
  youtube?: InputMaybe<Scalars['String']>
}

export type Copy = {
  __typename?: 'Copy'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  sectionId?: Maybe<Scalars['String']>
  seo?: Maybe<ComponentArticlesSeo>
  tag?: Maybe<CopyTagEntityResponse>
  title?: Maybe<Scalars['String']>
  titleWithGradient?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CopyEntity = {
  __typename?: 'CopyEntity'
  attributes?: Maybe<Copy>
  id?: Maybe<Scalars['ID']>
}

export type CopyEntityResponse = {
  __typename?: 'CopyEntityResponse'
  data?: Maybe<CopyEntity>
}

export type CopyEntityResponseCollection = {
  __typename?: 'CopyEntityResponseCollection'
  data: Array<CopyEntity>
  meta: ResponseCollectionMeta
}

export type CopyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CopyFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<CopyFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CopyFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  sectionId?: InputMaybe<StringFilterInput>
  seo?: InputMaybe<ComponentArticlesSeoFiltersInput>
  tag?: InputMaybe<CopyTagFiltersInput>
  title?: InputMaybe<StringFilterInput>
  titleWithGradient?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CopyInput = {
  description?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  sectionId?: InputMaybe<Scalars['String']>
  seo?: InputMaybe<ComponentArticlesSeoInput>
  tag?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
  titleWithGradient?: InputMaybe<Scalars['String']>
}

export type CopyTag = {
  __typename?: 'CopyTag'
  createdAt?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  tagName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CopyTagEntity = {
  __typename?: 'CopyTagEntity'
  attributes?: Maybe<CopyTag>
  id?: Maybe<Scalars['ID']>
}

export type CopyTagEntityResponse = {
  __typename?: 'CopyTagEntityResponse'
  data?: Maybe<CopyTagEntity>
}

export type CopyTagEntityResponseCollection = {
  __typename?: 'CopyTagEntityResponseCollection'
  data: Array<CopyTagEntity>
  meta: ResponseCollectionMeta
}

export type CopyTagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CopyTagFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<CopyTagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CopyTagFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  tagName?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CopyTagInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>
  tagName?: InputMaybe<Scalars['String']>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  contains?: InputMaybe<Scalars['Date']>
  containsi?: InputMaybe<Scalars['Date']>
  endsWith?: InputMaybe<Scalars['Date']>
  eq?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']>
  notContainsi?: InputMaybe<Scalars['Date']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  startsWith?: InputMaybe<Scalars['Date']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export type Feature = {
  __typename?: 'Feature'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  downloadableContent?: Maybe<UploadFileEntityResponse>
  image?: Maybe<UploadFileEntityResponse>
  order?: Maybe<Scalars['Int']>
  publishedAt?: Maybe<Scalars['DateTime']>
  sectionId?: Maybe<Scalars['String']>
  sourceLinks?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type FeatureEntity = {
  __typename?: 'FeatureEntity'
  attributes?: Maybe<Feature>
  id?: Maybe<Scalars['ID']>
}

export type FeatureEntityResponse = {
  __typename?: 'FeatureEntityResponse'
  data?: Maybe<FeatureEntity>
}

export type FeatureEntityResponseCollection = {
  __typename?: 'FeatureEntityResponseCollection'
  data: Array<FeatureEntity>
  meta: ResponseCollectionMeta
}

export type FeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FeatureFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<FeatureFiltersInput>
  or?: InputMaybe<Array<InputMaybe<FeatureFiltersInput>>>
  order?: InputMaybe<IntFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  sectionId?: InputMaybe<StringFilterInput>
  sourceLinks?: InputMaybe<JsonFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type FeatureInput = {
  description?: InputMaybe<Scalars['String']>
  downloadableContent?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<Scalars['ID']>
  order?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  sectionId?: InputMaybe<Scalars['String']>
  sourceLinks?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type GenericMorph =
  | Article
  | Author
  | CmsAnalyzerAnalyse
  | CmsAnalyzerMatch
  | CmsAnalyzerMedia
  | CmsAnalyzerSummary
  | ComponentArticlesSeo
  | ComponentPodcastPodcastLinks
  | Copy
  | CopyTag
  | Feature
  | I18NLocale
  | Partnership
  | Podcast
  | PrivacyTermsCookie
  | Service
  | Tag
  | Team
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createArticle?: Maybe<ArticleEntityResponse>
  createAuthor?: Maybe<AuthorEntityResponse>
  createCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>
  createCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>
  createCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>
  createCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>
  createCopy?: Maybe<CopyEntityResponse>
  createCopyTag?: Maybe<CopyTagEntityResponse>
  createFeature?: Maybe<FeatureEntityResponse>
  createPartnership?: Maybe<PartnershipEntityResponse>
  createPodcast?: Maybe<PodcastEntityResponse>
  createPrivacyTermsCookie?: Maybe<PrivacyTermsCookieEntityResponse>
  createService?: Maybe<ServiceEntityResponse>
  createTag?: Maybe<TagEntityResponse>
  createTeam?: Maybe<TeamEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteArticle?: Maybe<ArticleEntityResponse>
  deleteAuthor?: Maybe<AuthorEntityResponse>
  deleteCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>
  deleteCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>
  deleteCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>
  deleteCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>
  deleteCopy?: Maybe<CopyEntityResponse>
  deleteCopyTag?: Maybe<CopyTagEntityResponse>
  deleteFeature?: Maybe<FeatureEntityResponse>
  deletePartnership?: Maybe<PartnershipEntityResponse>
  deletePodcast?: Maybe<PodcastEntityResponse>
  deletePrivacyTermsCookie?: Maybe<PrivacyTermsCookieEntityResponse>
  deleteService?: Maybe<ServiceEntityResponse>
  deleteTag?: Maybe<TagEntityResponse>
  deleteTeam?: Maybe<TeamEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateArticle?: Maybe<ArticleEntityResponse>
  updateAuthor?: Maybe<AuthorEntityResponse>
  updateCmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>
  updateCmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>
  updateCmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>
  updateCmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>
  updateCopy?: Maybe<CopyEntityResponse>
  updateCopyTag?: Maybe<CopyTagEntityResponse>
  updateFeature?: Maybe<FeatureEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updatePartnership?: Maybe<PartnershipEntityResponse>
  updatePodcast?: Maybe<PodcastEntityResponse>
  updatePrivacyTermsCookie?: Maybe<PrivacyTermsCookieEntityResponse>
  updateService?: Maybe<ServiceEntityResponse>
  updateTag?: Maybe<TagEntityResponse>
  updateTeam?: Maybe<TeamEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationCreateArticleArgs = {
  data: ArticleInput
}

export type MutationCreateAuthorArgs = {
  data: AuthorInput
}

export type MutationCreateCmsAnalyzerAnalyseArgs = {
  data: CmsAnalyzerAnalyseInput
}

export type MutationCreateCmsAnalyzerMatchArgs = {
  data: CmsAnalyzerMatchInput
}

export type MutationCreateCmsAnalyzerMediaArgs = {
  data: CmsAnalyzerMediaInput
}

export type MutationCreateCmsAnalyzerSummaryArgs = {
  data: CmsAnalyzerSummaryInput
}

export type MutationCreateCopyArgs = {
  data: CopyInput
}

export type MutationCreateCopyTagArgs = {
  data: CopyTagInput
}

export type MutationCreateFeatureArgs = {
  data: FeatureInput
}

export type MutationCreatePartnershipArgs = {
  data: PartnershipInput
}

export type MutationCreatePodcastArgs = {
  data: PodcastInput
}

export type MutationCreatePrivacyTermsCookieArgs = {
  data: PrivacyTermsCookieInput
}

export type MutationCreateServiceArgs = {
  data: ServiceInput
}

export type MutationCreateTagArgs = {
  data: TagInput
}

export type MutationCreateTeamArgs = {
  data: TeamInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteArticleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCmsAnalyzerAnalyseArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCmsAnalyzerMatchArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCmsAnalyzerMediaArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCmsAnalyzerSummaryArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCopyArgs = {
  id: Scalars['ID']
}

export type MutationDeleteCopyTagArgs = {
  id: Scalars['ID']
}

export type MutationDeleteFeatureArgs = {
  id: Scalars['ID']
}

export type MutationDeletePartnershipArgs = {
  id: Scalars['ID']
}

export type MutationDeletePodcastArgs = {
  id: Scalars['ID']
}

export type MutationDeletePrivacyTermsCookieArgs = {
  id: Scalars['ID']
}

export type MutationDeleteServiceArgs = {
  id: Scalars['ID']
}

export type MutationDeleteTagArgs = {
  id: Scalars['ID']
}

export type MutationDeleteTeamArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateArticleArgs = {
  data: ArticleInput
  id: Scalars['ID']
}

export type MutationUpdateAuthorArgs = {
  data: AuthorInput
  id: Scalars['ID']
}

export type MutationUpdateCmsAnalyzerAnalyseArgs = {
  data: CmsAnalyzerAnalyseInput
  id: Scalars['ID']
}

export type MutationUpdateCmsAnalyzerMatchArgs = {
  data: CmsAnalyzerMatchInput
  id: Scalars['ID']
}

export type MutationUpdateCmsAnalyzerMediaArgs = {
  data: CmsAnalyzerMediaInput
  id: Scalars['ID']
}

export type MutationUpdateCmsAnalyzerSummaryArgs = {
  data: CmsAnalyzerSummaryInput
  id: Scalars['ID']
}

export type MutationUpdateCopyArgs = {
  data: CopyInput
  id: Scalars['ID']
}

export type MutationUpdateCopyTagArgs = {
  data: CopyTagInput
  id: Scalars['ID']
}

export type MutationUpdateFeatureArgs = {
  data: FeatureInput
  id: Scalars['ID']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdatePartnershipArgs = {
  data: PartnershipInput
  id: Scalars['ID']
}

export type MutationUpdatePodcastArgs = {
  data: PodcastInput
  id: Scalars['ID']
}

export type MutationUpdatePrivacyTermsCookieArgs = {
  data: PrivacyTermsCookieInput
  id: Scalars['ID']
}

export type MutationUpdateServiceArgs = {
  data: ServiceInput
  id: Scalars['ID']
}

export type MutationUpdateTagArgs = {
  data: TagInput
  id: Scalars['ID']
}

export type MutationUpdateTeamArgs = {
  data: TeamInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export type Partnership = {
  __typename?: 'Partnership'
  collaborationNetwork?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  howToPartner?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PartnershipEntity = {
  __typename?: 'PartnershipEntity'
  attributes?: Maybe<Partnership>
  id?: Maybe<Scalars['ID']>
}

export type PartnershipEntityResponse = {
  __typename?: 'PartnershipEntityResponse'
  data?: Maybe<PartnershipEntity>
}

export type PartnershipEntityResponseCollection = {
  __typename?: 'PartnershipEntityResponseCollection'
  data: Array<PartnershipEntity>
  meta: ResponseCollectionMeta
}

export type PartnershipFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PartnershipFiltersInput>>>
  collaborationNetwork?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  fullName?: InputMaybe<StringFilterInput>
  howToPartner?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<PartnershipFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PartnershipFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PartnershipInput = {
  collaborationNetwork?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  fullName?: InputMaybe<Scalars['String']>
  howToPartner?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type Podcast = {
  __typename?: 'Podcast'
  TLDR: Scalars['String']
  audioFile: UploadFileEntityResponse
  createdAt?: Maybe<Scalars['DateTime']>
  links?: Maybe<ComponentPodcastPodcastLinks>
  podcastImage: UploadFileEntityResponse
  podcast_tags?: Maybe<TagRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedDate: Scalars['Date']
  related_podcasts?: Maybe<PodcastRelationResponseCollection>
  seo?: Maybe<ComponentArticlesSeo>
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PodcastPodcast_TagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PodcastRelated_PodcastsArgs = {
  filters?: InputMaybe<PodcastFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type PodcastEntity = {
  __typename?: 'PodcastEntity'
  attributes?: Maybe<Podcast>
  id?: Maybe<Scalars['ID']>
}

export type PodcastEntityResponse = {
  __typename?: 'PodcastEntityResponse'
  data?: Maybe<PodcastEntity>
}

export type PodcastEntityResponseCollection = {
  __typename?: 'PodcastEntityResponseCollection'
  data: Array<PodcastEntity>
  meta: ResponseCollectionMeta
}

export type PodcastFiltersInput = {
  TLDR?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<PodcastFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  links?: InputMaybe<ComponentPodcastPodcastLinksFiltersInput>
  not?: InputMaybe<PodcastFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PodcastFiltersInput>>>
  podcast_tags?: InputMaybe<TagFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  publishedDate?: InputMaybe<DateFilterInput>
  related_podcasts?: InputMaybe<PodcastFiltersInput>
  seo?: InputMaybe<ComponentArticlesSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PodcastInput = {
  TLDR?: InputMaybe<Scalars['String']>
  audioFile?: InputMaybe<Scalars['ID']>
  links?: InputMaybe<ComponentPodcastPodcastLinksInput>
  podcastImage?: InputMaybe<Scalars['ID']>
  podcast_tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedDate?: InputMaybe<Scalars['Date']>
  related_podcasts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  seo?: InputMaybe<ComponentArticlesSeoInput>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type PodcastRelationResponseCollection = {
  __typename?: 'PodcastRelationResponseCollection'
  data: Array<PodcastEntity>
}

export type PrivacyTermsCookie = {
  __typename?: 'PrivacyTermsCookie'
  createdAt?: Maybe<Scalars['DateTime']>
  description: Scalars['String']
  header: Scalars['String']
  pdf?: Maybe<UploadFileEntityResponse>
  publishedAt?: Maybe<Scalars['DateTime']>
  seo?: Maybe<ComponentArticlesSeo>
  slug: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PrivacyTermsCookieEntity = {
  __typename?: 'PrivacyTermsCookieEntity'
  attributes?: Maybe<PrivacyTermsCookie>
  id?: Maybe<Scalars['ID']>
}

export type PrivacyTermsCookieEntityResponse = {
  __typename?: 'PrivacyTermsCookieEntityResponse'
  data?: Maybe<PrivacyTermsCookieEntity>
}

export type PrivacyTermsCookieEntityResponseCollection = {
  __typename?: 'PrivacyTermsCookieEntityResponseCollection'
  data: Array<PrivacyTermsCookieEntity>
  meta: ResponseCollectionMeta
}

export type PrivacyTermsCookieFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PrivacyTermsCookieFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  header?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<PrivacyTermsCookieFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PrivacyTermsCookieFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  seo?: InputMaybe<ComponentArticlesSeoFiltersInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PrivacyTermsCookieInput = {
  description?: InputMaybe<Scalars['String']>
  header?: InputMaybe<Scalars['String']>
  pdf?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  seo?: InputMaybe<ComponentArticlesSeoInput>
  slug?: InputMaybe<Scalars['String']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  article?: Maybe<ArticleEntityResponse>
  articles?: Maybe<ArticleEntityResponseCollection>
  author?: Maybe<AuthorEntityResponse>
  authors?: Maybe<AuthorEntityResponseCollection>
  cmsAnalyzerAnalyse?: Maybe<CmsAnalyzerAnalyseEntityResponse>
  cmsAnalyzerAnalyses?: Maybe<CmsAnalyzerAnalyseEntityResponseCollection>
  cmsAnalyzerMatch?: Maybe<CmsAnalyzerMatchEntityResponse>
  cmsAnalyzerMatches?: Maybe<CmsAnalyzerMatchEntityResponseCollection>
  cmsAnalyzerMedia?: Maybe<CmsAnalyzerMediaEntityResponse>
  cmsAnalyzerMedias?: Maybe<CmsAnalyzerMediaEntityResponseCollection>
  cmsAnalyzerSummaries?: Maybe<CmsAnalyzerSummaryEntityResponseCollection>
  cmsAnalyzerSummary?: Maybe<CmsAnalyzerSummaryEntityResponse>
  copies?: Maybe<CopyEntityResponseCollection>
  copy?: Maybe<CopyEntityResponse>
  copyTag?: Maybe<CopyTagEntityResponse>
  copyTags?: Maybe<CopyTagEntityResponseCollection>
  feature?: Maybe<FeatureEntityResponse>
  features?: Maybe<FeatureEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  partnership?: Maybe<PartnershipEntityResponse>
  partnerships?: Maybe<PartnershipEntityResponseCollection>
  podcast?: Maybe<PodcastEntityResponse>
  podcasts?: Maybe<PodcastEntityResponseCollection>
  privacyTermsCookie?: Maybe<PrivacyTermsCookieEntityResponse>
  privacyTermsCookies?: Maybe<PrivacyTermsCookieEntityResponseCollection>
  service?: Maybe<ServiceEntityResponse>
  services?: Maybe<ServiceEntityResponseCollection>
  tag?: Maybe<TagEntityResponse>
  tags?: Maybe<TagEntityResponseCollection>
  team?: Maybe<TeamEntityResponse>
  teams?: Maybe<TeamEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCmsAnalyzerAnalyseArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCmsAnalyzerAnalysesArgs = {
  filters?: InputMaybe<CmsAnalyzerAnalyseFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCmsAnalyzerMatchArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCmsAnalyzerMatchesArgs = {
  filters?: InputMaybe<CmsAnalyzerMatchFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCmsAnalyzerMediaArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCmsAnalyzerMediasArgs = {
  filters?: InputMaybe<CmsAnalyzerMediaFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCmsAnalyzerSummariesArgs = {
  filters?: InputMaybe<CmsAnalyzerSummaryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCmsAnalyzerSummaryArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCopiesArgs = {
  filters?: InputMaybe<CopyFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryCopyArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCopyTagArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryCopyTagsArgs = {
  filters?: InputMaybe<CopyTagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryFeatureArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryFeaturesArgs = {
  filters?: InputMaybe<FeatureFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPartnershipArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPartnershipsArgs = {
  filters?: InputMaybe<PartnershipFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPodcastArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPodcastsArgs = {
  filters?: InputMaybe<PodcastFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPrivacyTermsCookieArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryPrivacyTermsCookiesArgs = {
  filters?: InputMaybe<PrivacyTermsCookieFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryTeamsArgs = {
  filters?: InputMaybe<TeamFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Service = {
  __typename?: 'Service'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ServiceEntity = {
  __typename?: 'ServiceEntity'
  attributes?: Maybe<Service>
  id?: Maybe<Scalars['ID']>
}

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse'
  data?: Maybe<ServiceEntity>
}

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection'
  data: Array<ServiceEntity>
  meta: ResponseCollectionMeta
}

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  email?: InputMaybe<StringFilterInput>
  full_name?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ServiceFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ServiceInput = {
  description?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  full_name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Tag = {
  __typename?: 'Tag'
  createdAt?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  tagName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TagEntity = {
  __typename?: 'TagEntity'
  attributes?: Maybe<Tag>
  id?: Maybe<Scalars['ID']>
}

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse'
  data?: Maybe<TagEntity>
}

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection'
  data: Array<TagEntity>
  meta: ResponseCollectionMeta
}

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<TagFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  tagName?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TagInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>
  tagName?: InputMaybe<Scalars['String']>
}

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection'
  data: Array<TagEntity>
}

export type Team = {
  __typename?: 'Team'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  image?: Maybe<UploadFileEntityResponse>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  position?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TeamEntity = {
  __typename?: 'TeamEntity'
  attributes?: Maybe<Team>
  id?: Maybe<Scalars['ID']>
}

export type TeamEntityResponse = {
  __typename?: 'TeamEntityResponse'
  data?: Maybe<TeamEntity>
}

export type TeamEntityResponseCollection = {
  __typename?: 'TeamEntityResponseCollection'
  data: Array<TeamEntity>
  meta: ResponseCollectionMeta
}

export type TeamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<TeamFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>
  order?: InputMaybe<IntFilterInput>
  position?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TeamInput = {
  description?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  position?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}
