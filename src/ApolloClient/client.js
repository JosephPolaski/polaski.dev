import { ApolloClient, InMemoryCache, createHttpLink, gql} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export async function getRepoDataProps(){
    

    const httpLink = createHttpLink({

        uri: 'https://api.github.com/graphql',
      
    });


    const authLink = setContext((_, { headers }) => {    
        return {
  
        headers: {  
            ...headers,  
            authorization: `Bearer ${process.env.REACT_APP_GIT_AUTH_2}`,  
        }  
        }  
    });
  
    const client = new ApolloClient({

        link: authLink.concat(httpLink),  
        cache: new InMemoryCache(),
  
    });

    const { data } = await client.query({
        query: gql`
        {
            user(login: "JosephPolaski") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      url
                      description
                      primaryLanguage {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        
        `
    })    

    const { user } = data;
    const pinnedRepos = user.pinnedItems.edges.map(({node})=> node);    
    
    return {
        props: {
          pinnedRepos
        }        
    }

}
