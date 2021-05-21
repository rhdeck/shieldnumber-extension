export type AWSEmail = string;
export type AWSURL = string;
export type AWSPhone = string;
export type AWSDate = string;
export type AWSDateTime = string;
export type AWSTime = string;
export type AWSIPAddress = string;
export type AWSJSON = string;
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptInvitation
// ====================================================

export interface acceptInvitation_redeemInvitation {
  __typename: "Account";
  id: string;
  name: string;
}

export interface acceptInvitation {
  redeemInvitation: acceptInvitation_redeemInvitation;
}

export interface acceptInvitationVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAvailableNumbers
// ====================================================

export interface getAvailableNumbers_getAvailableNumbers {
  __typename: "AvailablePhoneNumber";
  /**
   * Phone number in internatiional form (e.g. +16175551212)
   */
  phoneNumber: string;
  /**
   * Country of the phone number
   */
  country: string | null;
  /**
   * City
   */
  city: string | null;
  /**
   * State/Province/Region
   */
  state: string | null;
}

export interface getAvailableNumbers {
  /**
   * Get avialable phone numbers for a given search se
   */
  getAvailableNumbers: getAvailableNumbers_getAvailableNumbers[];
}

export interface getAvailableNumbersVariables {
  areaCode?: number | null;
  locality?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAvailableTollFreeNumbers
// ====================================================

export interface getAvailableTollFreeNumbers_getAvailableTollfreeNumbers {
  __typename: "AvailableTollFreePhoneNumber";
  /**
   * Phone number in internatiional form (e.g. +18005551212)
   */
  phoneNumber: string;
  /**
   * Country of the phone number
   */
  country: string | null;
}

export interface getAvailableTollFreeNumbers {
  getAvailableTollfreeNumbers: getAvailableTollFreeNumbers_getAvailableTollfreeNumbers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccount
// ====================================================

export interface getAccount_getAccount_costDetail {
  __typename: "CostItem";
  description: string;
  amount: number;
  periodStart: AWSDateTime;
  periodEnd: AWSDateTime;
}

export interface getAccount_getAccount {
  __typename: "Account";
  id: string;
  name: string;
  myRole: string;
  email: string | null;
  claimedNumbers: number;
  nextInvoice: AWSDateTime | null;
  paymentForm: string | null;
  amountDue: number | null;
  isTrial: boolean;
  quantity: number;
  term: Term;
  paymentStatus: PaymentStatus;
  costDetail: getAccount_getAccount_costDetail[];
  timezone: string;
  digestTime: AWSTime;
  digestFrequency: DigestFrequency;
  digestDOW: DayOfWeek;
  digestDOM: number;
  nextDigestDate: AWSDateTime | null;
  digestToEmails: AWSEmail[];
  sendEmptyDigest: boolean;
  digestNumberCount: number;
  digestNumbers: string[];
}

export interface getAccount {
  getAccount: getAccount_getAccount;
}

export interface getAccountVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBillingUrl
// ====================================================

export interface getBillingUrl {
  /**
   * Retrieve a templorary URL for accessing stripe billing
   */
  getBillingUrl: string | null;
}

export interface getBillingUrlVariables {
  accountId: string;
  returnUri: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateAccount
// ====================================================

export interface updateAccount_updateAccount_costDetail {
  __typename: "CostItem";
  description: string;
  amount: number;
  periodStart: AWSDateTime;
  periodEnd: AWSDateTime;
}

export interface updateAccount_updateAccount {
  __typename: "Account";
  id: string;
  name: string;
  myRole: string;
  email: string | null;
  claimedNumbers: number;
  nextInvoice: AWSDateTime | null;
  paymentForm: string | null;
  amountDue: number | null;
  isTrial: boolean;
  quantity: number;
  term: Term;
  paymentStatus: PaymentStatus;
  costDetail: updateAccount_updateAccount_costDetail[];
  timezone: string;
  digestTime: AWSTime;
  digestFrequency: DigestFrequency;
  digestDOW: DayOfWeek;
  digestDOM: number;
  nextDigestDate: AWSDateTime | null;
  digestToEmails: AWSEmail[];
  sendEmptyDigest: boolean;
  digestNumberCount: number;
  digestNumbers: string[];
}

export interface updateAccount {
  updateAccount: updateAccount_updateAccount;
}

export interface updateAccountVariables {
  accountId: string;
  input: UpdateAccountInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: endTrial
// ====================================================

export interface endTrial_endTrial {
  __typename: "Account";
  id: string;
}

export interface endTrial {
  endTrial: endTrial_endTrial;
}

export interface endTrialVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeAccount
// ====================================================

export interface removeAccount_closeAccount_costDetail {
  __typename: "CostItem";
  description: string;
  amount: number;
  periodStart: AWSDateTime;
  periodEnd: AWSDateTime;
}

export interface removeAccount_closeAccount {
  __typename: "Account";
  id: string;
  name: string;
  myRole: string;
  email: string | null;
  claimedNumbers: number;
  nextInvoice: AWSDateTime | null;
  paymentForm: string | null;
  amountDue: number | null;
  isTrial: boolean;
  quantity: number;
  term: Term;
  paymentStatus: PaymentStatus;
  costDetail: removeAccount_closeAccount_costDetail[];
  timezone: string;
  digestTime: AWSTime;
  digestFrequency: DigestFrequency;
  digestDOW: DayOfWeek;
  digestDOM: number;
  nextDigestDate: AWSDateTime | null;
  digestToEmails: AWSEmail[];
  sendEmptyDigest: boolean;
  digestNumberCount: number;
  digestNumbers: string[];
}

export interface removeAccount {
  closeAccount: removeAccount_closeAccount;
}

export interface removeAccountVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: annualizeAccount
// ====================================================

export interface annualizeAccount_annualizeAccount_costDetail {
  __typename: "CostItem";
  description: string;
  amount: number;
  periodStart: AWSDateTime;
  periodEnd: AWSDateTime;
}

export interface annualizeAccount_annualizeAccount {
  __typename: "Account";
  id: string;
  name: string;
  myRole: string;
  email: string | null;
  claimedNumbers: number;
  nextInvoice: AWSDateTime | null;
  paymentForm: string | null;
  amountDue: number | null;
  isTrial: boolean;
  quantity: number;
  term: Term;
  paymentStatus: PaymentStatus;
  costDetail: annualizeAccount_annualizeAccount_costDetail[];
  timezone: string;
  digestTime: AWSTime;
  digestFrequency: DigestFrequency;
  digestDOW: DayOfWeek;
  digestDOM: number;
  nextDigestDate: AWSDateTime | null;
  digestToEmails: AWSEmail[];
  sendEmptyDigest: boolean;
  digestNumberCount: number;
  digestNumbers: string[];
}

export interface annualizeAccount {
  annualizeAccount: annualizeAccount_annualizeAccount;
}

export interface annualizeAccountVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: testAccountDigestM
// ====================================================

export interface testAccountDigestM {
  testAccountDigest: boolean;
}

export interface testAccountDigestMVariables {
  addresses: string[];
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccountEvents
// ====================================================

export interface getAccountEvents_getAccountEvents_edges_node {
  __typename: "Event";
  id: string;
  date: AWSDateTime;
  event: string;
  context: AWSJSON;
}

export interface getAccountEvents_getAccountEvents_edges {
  __typename: "EventEdge";
  /**
   * Call
   */
  node: getAccountEvents_getAccountEvents_edges_node;
}

export interface getAccountEvents_getAccountEvents {
  __typename: "EventCursor";
  /**
   * Edges (cursor string + call)
   */
  edges: getAccountEvents_getAccountEvents_edges[];
}

export interface getAccountEvents {
  getAccountEvents: getAccountEvents_getAccountEvents;
}

export interface getAccountEventsVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: buyNumber
// ====================================================

export interface buyNumber_claimNumber {
  __typename: "Number";
  id: string;
}

export interface buyNumber {
  claimNumber: buyNumber_claimNumber;
}

export interface buyNumberVariables {
  accountId: string;
  number: string;
  name?: string | null;
  serviceType: NumberServiceType;
  message: string;
  voice: Voice;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccountCalls
// ====================================================

export interface getAccountCalls_getAccountCalls_edges_node {
  __typename: "Call";
  /**
   * Unique identifier of call
   */
  id: string;
  /**
   * Source number associated with this call in E.164 international format
   */
  source: string | null;
  /**
   * Phone number associated with this call in international format (e.g. +16172345678) - maps to Number.id
   */
  phoneNumber: AWSPhone;
  date: AWSDateTime;
  duration: number | null;
  recordingUrl: AWSURL | null;
  transcripts: (string | null)[] | null;
  sentEmail: boolean;
  /**
   * Name of the source via CNAM if available
   */
  sourceName: string | null;
  type: CallType;
  isSpam: boolean;
  isDone: boolean;
  numberId: string;
  numberName: string;
}

export interface getAccountCalls_getAccountCalls_edges {
  __typename: "CallEdge";
  /**
   * Call
   */
  node: getAccountCalls_getAccountCalls_edges_node;
}

export interface getAccountCalls_getAccountCalls {
  __typename: "CallCursor";
  /**
   * Edges (cursor string + call)
   */
  edges: getAccountCalls_getAccountCalls_edges[];
}

export interface getAccountCalls {
  getAccountCalls: getAccountCalls_getAccountCalls;
}

export interface getAccountCallsVariables {
  accountId: string;
  lastPage?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: downloadAccountCallsCSV
// ====================================================

export interface downloadAccountCallsCSV {
  makeAccountCallsCSV: AWSURL;
}

export interface downloadAccountCallsCSVVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccountsForBN
// ====================================================

export interface getAccountsForBN_getAccounts_numbers_edges_node {
  __typename: "Number";
  id: string;
}

export interface getAccountsForBN_getAccounts_numbers_edges {
  __typename: "NumberEdge";
  node: getAccountsForBN_getAccounts_numbers_edges_node;
}

export interface getAccountsForBN_getAccounts_numbers {
  __typename: "NumberCursor";
  edges: getAccountsForBN_getAccounts_numbers_edges[];
}

export interface getAccountsForBN_getAccounts {
  __typename: "Account";
  id: string;
  name: string;
  maxNumbers: number;
  myRole: string;
  claimedNumbers: number;
  numbers: getAccountsForBN_getAccounts_numbers;
}

export interface getAccountsForBN {
  getAccounts: getAccountsForBN_getAccounts[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCall
// ====================================================

export interface getCall_getCall {
  __typename: "Call";
  /**
   * Unique identifier of call
   */
  id: string;
  /**
   * Source number associated with this call in E.164 international format
   */
  source: string | null;
  /**
   * Phone number associated with this call in international format (e.g. +16172345678) - maps to Number.id
   */
  phoneNumber: AWSPhone;
  date: AWSDateTime;
  duration: number | null;
  recordingUrl: AWSURL | null;
  transcripts: (string | null)[] | null;
  sentEmail: boolean;
  /**
   * Name of the source via CNAM if available
   */
  sourceName: string | null;
  type: CallType;
  isDone: boolean;
  isSpam: boolean;
}

export interface getCall_getNumber {
  __typename: "Number";
  id: string;
  name: string;
  toEmails: AWSEmail[];
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  sendSMSSMS: boolean;
  sendSMSCall: boolean;
  serviceType: NumberServiceType;
  canSendWebhook: boolean;
}

export interface getCall {
  getCall: getCall_getCall;
  getNumber: getCall_getNumber;
}

export interface getCallVariables {
  accountId: string;
  number: string;
  callId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resendEmail
// ====================================================

export interface resendEmail {
  sendEmail: boolean;
}

export interface resendEmailVariables {
  accountId: string;
  number: string;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendSMSM
// ====================================================

export interface sendSMSM {
  sendSMS: boolean;
}

export interface sendSMSMVariables {
  accountId: string;
  number: string;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resendWebhook
// ====================================================

export interface resendWebhook {
  sendWebhook: boolean;
}

export interface resendWebhookVariables {
  accountId: string;
  number: string;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCalls
// ====================================================

export interface getCalls_getCalls_edges_node {
  __typename: "Call";
  /**
   * Unique identifier of call
   */
  id: string;
  /**
   * Source number associated with this call in E.164 international format
   */
  source: string | null;
  /**
   * Phone number associated with this call in international format (e.g. +16172345678) - maps to Number.id
   */
  phoneNumber: AWSPhone;
  date: AWSDateTime;
  duration: number | null;
  recordingUrl: AWSURL | null;
  transcripts: (string | null)[] | null;
  sentEmail: boolean;
  /**
   * Name of the source via CNAM if available
   */
  sourceName: string | null;
  type: CallType;
  isSpam: boolean;
  isDone: boolean;
}

export interface getCalls_getCalls_edges {
  __typename: "CallEdge";
  /**
   * Call
   */
  node: getCalls_getCalls_edges_node;
}

export interface getCalls_getCalls {
  __typename: "CallCursor";
  /**
   * Edges (cursor string + call)
   */
  edges: getCalls_getCalls_edges[];
}

export interface getCalls_getNumber {
  __typename: "Number";
  id: string;
  name: string;
  toEmails: AWSEmail[];
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  sendSMSSMS: boolean;
  sendSMSCall: boolean;
  serviceType: NumberServiceType;
  canSendWebhook: boolean;
}

export interface getCalls {
  getCalls: getCalls_getCalls;
  getNumber: getCalls_getNumber;
}

export interface getCallsVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: downloadCSV
// ====================================================

export interface downloadCSV {
  makeCallsCSV: AWSURL;
}

export interface downloadCSVVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccountName
// ====================================================

export interface getAccountName_getAccounts {
  __typename: "Account";
  id: string;
  name: string;
}

export interface getAccountName_getAccount_extensionData {
  __typename: "ExtensionData";
  key: string;
  url: AWSURL;
}

export interface getAccountName_getAccount {
  __typename: "Account";
  id: string;
  name: string;
  hasDefaultPayment: boolean;
  hasSubscription: boolean;
  myRole: string;
  term: Term;
  isTrial: boolean;
  extensionData: getAccountName_getAccount_extensionData | null;
}

export interface getAccountName_getNumbers_edges_node {
  __typename: "Number";
  id: string;
  name: string;
}

export interface getAccountName_getNumbers_edges {
  __typename: "NumberEdge";
  node: getAccountName_getNumbers_edges_node;
}

export interface getAccountName_getNumbers {
  __typename: "NumberCursor";
  edges: getAccountName_getNumbers_edges[];
}

export interface getAccountName {
  getAccounts: getAccountName_getAccounts[];
  getAccount: getAccountName_getAccount;
  getNumbers: getAccountName_getNumbers;
}

export interface getAccountNameVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccounts
// ====================================================

export interface getAccounts_getAccounts {
  __typename: "Account";
  id: string;
  name: string;
  maxNumbers: number;
  myRole: string;
  claimedNumbers: number;
}

export interface getAccounts {
  getAccounts: getAccounts_getAccounts[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAccountsForHome
// ====================================================

export interface getAccountsForHome_getAccounts_numbers_edges_node {
  __typename: "Number";
  id: string;
}

export interface getAccountsForHome_getAccounts_numbers_edges {
  __typename: "NumberEdge";
  node: getAccountsForHome_getAccounts_numbers_edges_node;
}

export interface getAccountsForHome_getAccounts_numbers {
  __typename: "NumberCursor";
  edges: getAccountsForHome_getAccounts_numbers_edges[];
}

export interface getAccountsForHome_getAccounts {
  __typename: "Account";
  id: string;
  name: string;
  maxNumbers: number;
  myRole: string;
  claimedNumbers: number;
  numbers: getAccountsForHome_getAccounts_numbers;
}

export interface getAccountsForHome {
  getAccounts: getAccountsForHome_getAccounts[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: makeAccountAndNumber
// ====================================================

export interface makeAccountAndNumber_createAccount_account {
  __typename: "Account";
  id: string;
}

export interface makeAccountAndNumber_createAccount_number {
  __typename: "Number";
  id: string;
}

export interface makeAccountAndNumber_createAccount {
  __typename: "AccountPurchase";
  response: PurchaseResponse | null;
  clientSecret: string | null;
  account: makeAccountAndNumber_createAccount_account;
  number: makeAccountAndNumber_createAccount_number;
  nextAction: AWSJSON | null;
}

export interface makeAccountAndNumber {
  createAccount: makeAccountAndNumber_createAccount;
}

export interface makeAccountAndNumberVariables {
  number: string;
  paymentId: string;
  emails: AWSEmail[];
  billingEmail: string;
  message: string;
  voice: Voice;
  accountName: string;
  coupon?: string | null;
  serviceType: NumberServiceType;
  term: Term;
  timezone: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: confirmPayment
// ====================================================

export interface confirmPayment_confirmPayment_account {
  __typename: "Account";
  id: string;
}

export interface confirmPayment_confirmPayment_number {
  __typename: "Number";
  id: string;
}

export interface confirmPayment_confirmPayment {
  __typename: "AccountPurchase";
  response: PurchaseResponse | null;
  clientSecret: string | null;
  account: confirmPayment_confirmPayment_account;
  number: confirmPayment_confirmPayment_number;
  nextAction: AWSJSON | null;
}

export interface confirmPayment {
  confirmPayment: confirmPayment_confirmPayment;
}

export interface confirmPaymentVariables {
  accountId: string;
  number: string;
  paymentIntent: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNumber
// ====================================================

export interface getNumber_getNumber_webhookHeaders {
  __typename: "Header";
  key: string;
  value: string;
}

export interface getNumber_getNumber {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
  isEjecting: boolean;
  canSendWebhook: boolean;
  webhookHeaders: getNumber_getNumber_webhookHeaders[];
  smsSpam: boolean;
  emailSpam: boolean;
  digestFrequency: DigestFrequency;
  digestTime: AWSTime;
  digestDOW: DayOfWeek;
  digestDOM: number;
  sendDigest: boolean;
  digestToEmails: AWSEmail[];
  nextDigestDate: AWSDateTime | null;
  sendEmptyDigest: boolean;
  timezone: string;
  useAccountDigest: boolean;
}

export interface getNumber_getNumberEvents_edges_node {
  __typename: "Event";
  id: string;
  event: string;
  date: AWSDateTime;
  context: AWSJSON;
}

export interface getNumber_getNumberEvents_edges {
  __typename: "EventEdge";
  /**
   * Call
   */
  node: getNumber_getNumberEvents_edges_node;
}

export interface getNumber_getNumberEvents {
  __typename: "EventCursor";
  /**
   * Edges (cursor string + call)
   */
  edges: getNumber_getNumberEvents_edges[];
}

export interface getNumber_getAccount {
  __typename: "Account";
  id: string;
  name: string;
  isTrial: boolean;
}

export interface getNumber {
  getNumber: getNumber_getNumber;
  getNumberEvents: getNumber_getNumberEvents;
  getAccount: getNumber_getAccount;
}

export interface getNumberVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateNumber
// ====================================================

export interface updateNumber_updateNumber_webhookHeaders {
  __typename: "Header";
  key: string;
  value: string;
}

export interface updateNumber_updateNumber {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
  isEjecting: boolean;
  canSendWebhook: boolean;
  webhookHeaders: updateNumber_updateNumber_webhookHeaders[];
  smsSpam: boolean;
  emailSpam: boolean;
  digestFrequency: DigestFrequency;
  digestTime: AWSTime;
  digestDOW: DayOfWeek;
  digestDOM: number;
  sendDigest: boolean;
  digestToEmails: AWSEmail[];
  nextDigestDate: AWSDateTime | null;
  sendEmptyDigest: boolean;
  timezone: string;
  useAccountDigest: boolean;
}

export interface updateNumber {
  updateNumber: updateNumber_updateNumber;
}

export interface updateNumberVariables {
  accountId: string;
  number: string;
  input: UpdateNumberInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: releaseNumber
// ====================================================

export interface releaseNumber {
  releaseNumber: boolean;
}

export interface releaseNumberVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: eject
// ====================================================

export interface eject_ejectNumber_webhookHeaders {
  __typename: "Header";
  key: string;
  value: string;
}

export interface eject_ejectNumber {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
  isEjecting: boolean;
  canSendWebhook: boolean;
  webhookHeaders: eject_ejectNumber_webhookHeaders[];
  smsSpam: boolean;
  emailSpam: boolean;
  digestFrequency: DigestFrequency;
  digestTime: AWSTime;
  digestDOW: DayOfWeek;
  digestDOM: number;
  sendDigest: boolean;
  digestToEmails: AWSEmail[];
  nextDigestDate: AWSDateTime | null;
  sendEmptyDigest: boolean;
  timezone: string;
  useAccountDigest: boolean;
}

export interface eject {
  ejectNumber: eject_ejectNumber;
}

export interface ejectVariables {
  accountId: string;
  numberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: cancelEject
// ====================================================

export interface cancelEject_cancelEject_webhookHeaders {
  __typename: "Header";
  key: string;
  value: string;
}

export interface cancelEject_cancelEject {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
  isEjecting: boolean;
  canSendWebhook: boolean;
  webhookHeaders: cancelEject_cancelEject_webhookHeaders[];
  smsSpam: boolean;
  emailSpam: boolean;
  digestFrequency: DigestFrequency;
  digestTime: AWSTime;
  digestDOW: DayOfWeek;
  digestDOM: number;
  sendDigest: boolean;
  digestToEmails: AWSEmail[];
  nextDigestDate: AWSDateTime | null;
  sendEmptyDigest: boolean;
  timezone: string;
  useAccountDigest: boolean;
}

export interface cancelEject {
  cancelEject: cancelEject_cancelEject;
}

export interface cancelEjectVariables {
  accountId: string;
  numberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: testEmailM
// ====================================================

export interface testEmailM {
  testEmail: boolean;
}

export interface testEmailMVariables {
  number: string;
  addresses: string[];
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: testWebhookM
// ====================================================

export interface testWebhookM {
  testWebhook: boolean;
}

export interface testWebhookMVariables {
  number: string;
  url: string;
  headers?: HeaderInput[] | null;
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: testDigestM
// ====================================================

export interface testDigestM {
  testDigest: boolean;
}

export interface testDigestMVariables {
  number: string;
  addresses: string[];
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNumberEvents
// ====================================================

export interface getNumberEvents_getNumber {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
}

export interface getNumberEvents_getNumberEvents_edges_node {
  __typename: "Event";
  id: string;
  event: string;
  date: AWSDateTime;
  context: AWSJSON;
}

export interface getNumberEvents_getNumberEvents_edges {
  __typename: "EventEdge";
  /**
   * Call
   */
  node: getNumberEvents_getNumberEvents_edges_node;
}

export interface getNumberEvents_getNumberEvents {
  __typename: "EventCursor";
  /**
   * Edges (cursor string + call)
   */
  edges: getNumberEvents_getNumberEvents_edges[];
}

export interface getNumberEvents {
  getNumber: getNumberEvents_getNumber;
  getNumberEvents: getNumberEvents_getNumberEvents;
}

export interface getNumberEventsVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNumbersForCards
// ====================================================

export interface getNumbersForCards_getNumbers_pageInfo {
  __typename: "PageInfo";
  /**
   * Whether there is a page after this one
   */
  hasNextPage: boolean;
  /**
   * Last cursor in this set (used for getting next page)
   */
  endCursor: string | null;
}

export interface getNumbersForCards_getNumbers_edges_node {
  __typename: "Number";
  id: string;
  name: string;
}

export interface getNumbersForCards_getNumbers_edges {
  __typename: "NumberEdge";
  node: getNumbersForCards_getNumbers_edges_node;
}

export interface getNumbersForCards_getNumbers {
  __typename: "NumberCursor";
  pageInfo: getNumbersForCards_getNumbers_pageInfo;
  edges: getNumbersForCards_getNumbers_edges[];
}

export interface getNumbersForCards {
  getNumbers: getNumbersForCards_getNumbers;
}

export interface getNumbersForCardsVariables {
  lastPage?: string | null;
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: downloadACCSV
// ====================================================

export interface downloadACCSV {
  makeCallsCSV: AWSURL;
}

export interface downloadACCSVVariables {
  accountId: string;
  number: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNumbers
// ====================================================

export interface getNumbers_getNumbers_edges_node {
  __typename: "Number";
  id: string;
  toEmails: AWSEmail[];
  name: string;
  sendSMSSMS: boolean;
  sendSMSCall: boolean;
  sendWebhook: boolean;
  toNumbers: AWSPhone[];
  availableSMS: number;
  availableCalls: number;
  usedSMS: number;
  usedCalls: number;
}

export interface getNumbers_getNumbers_edges {
  __typename: "NumberEdge";
  node: getNumbers_getNumbers_edges_node;
}

export interface getNumbers_getNumbers {
  __typename: "NumberCursor";
  edges: getNumbers_getNumbers_edges[];
}

export interface getNumbers_getAccount {
  __typename: "Account";
  id: string;
  name: string;
  maxNumbers: number;
  myRole: string;
  isTrial: boolean;
}

export interface getNumbers {
  getNumbers: getNumbers_getNumbers;
  getAccount: getNumbers_getAccount;
}

export interface getNumbersVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeUser
// ====================================================

export interface removeUser_removeFromAccount {
  __typename: "Account";
  id: string;
}

export interface removeUser {
  removeFromAccount: removeUser_removeFromAccount;
}

export interface removeUserVariables {
  accountId: string;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: promoteUser
// ====================================================

export interface promoteUser_updateUser {
  __typename: "User";
  id: string;
}

export interface promoteUser {
  updateUser: promoteUser_updateUser;
}

export interface promoteUserVariables {
  accountId: string;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: demoteUser
// ====================================================

export interface demoteUser_updateUser {
  __typename: "User";
  id: string;
}

export interface demoteUser {
  updateUser: demoteUser_updateUser;
}

export interface demoteUserVariables {
  accountId: string;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: leaveAccount
// ====================================================

export interface leaveAccount_leaveAccount {
  __typename: "User";
  id: string;
}

export interface leaveAccount {
  leaveAccount: leaveAccount_leaveAccount;
}

export interface leaveAccountVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: rescindMutation
// ====================================================

export interface rescindMutation_rescindInvitation_invitations {
  __typename: "Invitation";
  id: string;
  email: AWSEmail;
  role: string;
}

export interface rescindMutation_rescindInvitation {
  __typename: "Account";
  id: string;
  invitations: rescindMutation_rescindInvitation_invitations[] | null;
}

export interface rescindMutation {
  rescindInvitation: rescindMutation_rescindInvitation;
}

export interface rescindMutationVariables {
  accountId: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTeam
// ====================================================

export interface getTeam_getAccount_invitations {
  __typename: "Invitation";
  id: string;
  name: string | null;
  role: string;
}

export interface getTeam_getAccount {
  __typename: "Account";
  id: string;
  myRole: string;
  maxNumbers: number;
  name: string;
  invitations: getTeam_getAccount_invitations[] | null;
}

export interface getTeam_getUsers {
  __typename: "User";
  id: string;
  email: string;
  role: string;
  name: string;
}

export interface getTeam {
  getAccount: getTeam_getAccount;
  getUsers: getTeam_getUsers[];
}

export interface getTeamVariables {
  accountId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendInvitation
// ====================================================

export interface sendInvitation_inviteUser_invitations {
  __typename: "Invitation";
  id: string;
  email: AWSEmail;
  role: string;
}

export interface sendInvitation_inviteUser {
  __typename: "Account";
  id: string;
  invitations: sendInvitation_inviteUser_invitations[] | null;
}

export interface sendInvitation {
  inviteUser: sendInvitation_inviteUser;
}

export interface sendInvitationVariables {
  accountId: string;
  email: string;
  role?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: makeTestRecording
// ====================================================

export interface makeTestRecording {
  makeTestRecording: string;
}

export interface makeTestRecordingVariables {
  text: string;
  voice: Voice;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteUser
// ====================================================

export interface deleteUser {
  deleteUser: boolean;
}

export interface deleteUserVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: accountFragment
// ====================================================

export interface accountFragment_costDetail {
  __typename: "CostItem";
  description: string;
  amount: number;
  periodStart: AWSDateTime;
  periodEnd: AWSDateTime;
}

export interface accountFragment {
  __typename: "Account";
  id: string;
  name: string;
  myRole: string;
  email: string | null;
  claimedNumbers: number;
  nextInvoice: AWSDateTime | null;
  paymentForm: string | null;
  amountDue: number | null;
  isTrial: boolean;
  quantity: number;
  term: Term;
  paymentStatus: PaymentStatus;
  costDetail: accountFragment_costDetail[];
  timezone: string;
  digestTime: AWSTime;
  digestFrequency: DigestFrequency;
  digestDOW: DayOfWeek;
  digestDOM: number;
  nextDigestDate: AWSDateTime | null;
  digestToEmails: AWSEmail[];
  sendEmptyDigest: boolean;
  digestNumberCount: number;
  digestNumbers: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: numberFragment
// ====================================================

export interface numberFragment_webhookHeaders {
  __typename: "Header";
  key: string;
  value: string;
}

export interface numberFragment {
  __typename: "Number";
  id: string;
  name: string;
  messageText: string;
  messageAudioUrl: AWSURL | null;
  messageVoice: Voice;
  sendEmailSMS: boolean;
  /**
   * sendEmail: Boolean!
   */
  sendEmailCall: boolean;
  sendWebhook: boolean;
  toEmails: AWSEmail[];
  /**
   * emailTo: AWSEmail
   */
  webhookUrl: AWSURL | null;
  webhookMethod: HTTPMethod | null;
  webhookEncoding: ContentEncoding | null;
  webhookIncludeRecording: boolean | null;
  /**
   * How long to retain calls, in seconds (e.g. 10 minutes is 600, one year is 31535600 )
   */
  callRetention: number | null;
  isEjecting: boolean;
  canSendWebhook: boolean;
  webhookHeaders: numberFragment_webhookHeaders[];
  smsSpam: boolean;
  emailSpam: boolean;
  digestFrequency: DigestFrequency;
  digestTime: AWSTime;
  digestDOW: DayOfWeek;
  digestDOM: number;
  sendDigest: boolean;
  digestToEmails: AWSEmail[];
  nextDigestDate: AWSDateTime | null;
  sendEmptyDigest: boolean;
  timezone: string;
  useAccountDigest: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CallType {
  SMS = "SMS",
  VOICEMAIL = "VOICEMAIL",
}

export enum ContentEncoding {
  HTTP = "HTTP",
  JSON = "JSON",
}

export enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

export enum DigestFrequency {
  DAY = "DAY",
  MONTH = "MONTH",
  WEEK = "WEEK",
}

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export enum NumberServiceType {
  EMAIL = "EMAIL",
  ENHANCED = "ENHANCED",
  MINI = "MINI",
  TOLLFREE = "TOLLFREE",
}

export enum PaymentStatus {
  ACTIVE = "ACTIVE",
  PASTDUE = "PASTDUE",
}

export enum PurchaseResponse {
  REQUIRES_ACTION = "REQUIRES_ACTION",
}

export enum Term {
  MONTH = "MONTH",
  YEAR = "YEAR",
}

export enum Voice {
  Joanna = "Joanna",
  Matthew = "Matthew",
}

export interface HeaderInput {
  key: string;
  value: string;
}

export interface UpdateAccountInput {
  name?: string | null;
  email?: string | null;
  sendDigest?: boolean | null;
  digestFrequency?: DigestFrequency | null;
  digestTime?: AWSTime | null;
  digestDOW?: DayOfWeek | null;
  digestDOM?: number | null;
  digestToEmails?: AWSEmail[] | null;
  timezone?: string | null;
  sendEmptyDigest?: boolean | null;
}

export interface UpdateNumberInput {
  messageText?: string | null;
  messageVoice?: Voice | null;
  sendEmailCall?: boolean | null;
  sendEmailSMS?: boolean | null;
  sendWebhook?: boolean | null;
  webhook?: AWSURL | null;
  webhookMethod?: HTTPMethod | null;
  webhookEncoding?: ContentEncoding | null;
  webhookIncludeRecording?: boolean | null;
  webhookHeaders?: HeaderInput[] | null;
  callRetention?: number | null;
  name?: string | null;
  sendSMSSMS?: boolean | null;
  sendSMSCall?: boolean | null;
  toNumbers?: AWSPhone[] | null;
  toEmails?: AWSEmail[] | null;
  emailSpam?: boolean | null;
  smsSpam?: boolean | null;
  sendDigest?: boolean | null;
  digestFrequency?: DigestFrequency | null;
  digestTime?: AWSTime | null;
  digestDOW?: DayOfWeek | null;
  digestDOM?: number | null;
  digestToEmails?: AWSEmail[] | null;
  timezone?: string | null;
  sendEmptyDigest?: boolean | null;
  useAccountDigest?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
