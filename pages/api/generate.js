import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.topic),
    temperature: 0.6,
    max_tokens: 1000,
    top_p: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(topic) {
  const capitalizedTopic =
    topic;
  return `Brainstorm some headlines and bylines for a given topic. Then write an introductory paragraph about the topic.

Topic: Newspapers and Stripe
Headline: The financial future of news
Byline: During a period of transition and experimentation, many of the world’s top news brands are using Stripe to reach more readers and earn more revenue.
Introduction: It’s well understood that the internet has changed the way people consume news and that offline revenue models—built around subscriptions and advertisements—have not kept up. But what comes next remains unclear.

Topic: Cars and Stripe
Headline: How cars are driving financial innovation
Byline: From the way people buy cars to what they buy using their cars, the automotive industry is changing gear.
Introduction: In 1959, Volvo invented the three-point safety belt and purposely left the patent open so other manufacturers could adopt it. More than half a century later, Tesla shipped the first WiFi-based software updates to its Model S cars, removing the need for the customer to visit a Tesla dealership for updates and enhancements. It raised the standard for customer experience and product excellence and a decade of digital innovation followed.

Topic: Trucks and Stripe
Headline: How digital innovation is remaking the trucking industry
Byline: New tools are untangling supply chains, boosting revenue, and putting more money in drivers’ pockets.
Introduction: The trucking industry used to have a productivity problem. Drivers would spend hours looking for jobs and then hit the road with their trailers half full. Along their routes they would lose time searching for in-network fuel and parking. Finally, they had to wait to get paid, creating cash-flow challenges.

Topic: Crypto payouts and Stripe
Headline: Expanding access to the future of work with crypto payouts
Byline: Stripe now reaches a majority of the globe: 4.4 billion people in more than 110 countries can receive funds in local currencies or crypto.
Introduction: The labor market is evolving. From remote jobs to the Great Resignation, how we work and how we get paid are changing. The growth of freelance work is a big part of this. Just like online dating used to be a marginal way to meet people but is now the norm, online freelancing has evolved from stigmatized to mainstream. In five years, it’s predicted that a majority of Americans will be freelancers—a massive shift enabled in large part by new technology.

Topic: Agriculture and Stripe
Headline: A new age of agriculture
Byline: By combining ancient practices with modern technology, farmers are operating more efficiently and growing their businesses globally.
Introduction: Rooted in the earth and deep in tradition, farming might seem like the ultimate offline economy. But lately a new trend has emerged: agriculture has become one of the fastest-growing online industries, as farmers turn to the internet to sell produce, manage their money, and access critical financing. In 2021, thousands of agricultural businesses globally collectively processed over $1 billion through Stripe—and over the last two years, nearly 2,000 of them doubled their payment volume.

Topic: ${capitalizedTopic} `
;
}