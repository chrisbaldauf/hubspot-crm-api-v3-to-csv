# HubSpot CRM API v3 multi-object to CSV

This is a super simple example project that will pull the first 3 `contacts`, `companies`, `deals`, and `tickets` via HubSpot's CRM v3 API from the HubSpot demo account and print the results as a CSV list.

If you're serious about using these APIs, check out the HubSpot [v3 API Client Library](https://www.npmjs.com/package/@hubspot/api-client)

## Quickstart

```
git clone https://github.com/chrisbaldauf/hubspot-crm-api-v3-to-csv.git
cd hubspot-crm-api-v3-to-csv
npm install
node app.js
```

## Output

```
$ node app.js
== tickets
id,content,createdate,hs_lastmodifieddate,hs_object_id,hs_pipeline,hs_pipeline_stage,hs_ticket_priority,subject
1711855,Here are the details of the ticket.,2018-09-25T20:21:26.353Z,2019-06-04T00:44:03.725Z,1711855,0,1,,test_ticket
2180491,Here are the details of the ticket.,2018-10-15T13:58:50.505Z,2019-06-11T10:16:29.937Z,2180491,0,1,,test_ticket
7106518,,2019-02-13T10:29:13.535Z,2019-06-04T00:44:46.129Z,7106518,0,2,LOW,test
== companies
id,createdate,domain,hs_lastmodifieddate,hs_object_id,name
142226976,2016-05-29T19:53:19.172Z,,2020-05-11T06:57:45.128Z,142226976,Test
154479566,2016-06-14T14:22:53.571Z,,2020-05-11T08:58:47.911Z,154479566,test
160790833,2016-05-29T19:08:09.537Z,,2020-05-11T07:24:28.079Z,160790833,Test
== deals
id,amount,closedate,createdate,dealname,dealstage,hs_lastmodifieddate,hs_object_id,pipeline
931633510,100,2019-08-02T21:58:38.291Z,2019-08-13T21:58:21.511Z,Example deal,presentationscheduled,2019-08-13T22:30:53.314Z,931633510,default
2388597042,150,2020-07-31T17:49:18.166Z,2020-07-08T17:49:18.166Z,Example Deal 3,closedwon,2020-07-08T17:50:38.759Z,2388597042,default
2388605589,200,2020-07-31T17:47:49.488Z,2020-07-08T17:47:49.488Z,Example Deal 2,contractsent,2020-07-08T17:50:20.290Z,2388605589,default
== contacts
id,createdate,email,firstname,hs_object_id,lastmodifieddate,lastname
9332174,2018-09-12T08:40:39.789Z,user.testerson@test-provider.com,User,9332174,2020-05-04T01:12:44.993Z,Testerson
9332474,2018-09-12T08:50:29.217Z,testerson@test-provider.com,User,9332474,2020-05-10T16:29:41.407Z,Testerson
9332574,2018-09-12T08:52:13.219Z,esterson@test-provider.com,User,9332574,2020-05-26T13:11:59.972Z,Testerson
```

## Try it on your own account

Get your [HubSpot API Key](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key)

```
$ HUBSPOT_API_KEY={YOUR_HUBSPOT_API_KEY_HERE} node app.js
```

## Taking it further  

* Increase the results per page by changing the `limit` query parameter
* Iterate to the next page using `after` query parameter
* Alter the properties (fields) being returned using the `properties` query param
* Read all about the v3 API in our [Developer Docs](https://developers.hubspot.com/docs/api/crm/understanding-the-crm)
* Check out the official HubSpot [v3 API Client Library](https://www.npmjs.com/package/@hubspot/api-client)
