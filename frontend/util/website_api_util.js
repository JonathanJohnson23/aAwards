export const fetchWebsites = () => (
  $.ajax({
    method: 'GET',
    url: '/api/websites'
  })
);

export const fetchWebsite = id => (
  $.ajax({
    method: 'GET',
    url: `/api/websites/${id}`
  })
);

export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: { vote }
  })
);

export const createWebsite = website => (
  $.ajax({
    method: 'POST',
    url: '/api/websites',
    data: website,
    contentType: false,
    processData: false
  })
);

export const updateWebsite = (website, id) => (
 $.ajax({
    method: "PATCH",
    url:  `/api/websites/${id}`,
    data: website,
    contentType: false,
    processData: false
 })
)

export const deleteWebsite = (id) =>{
  return(
    $.ajax({
      url: `/api/websites/${id}`,
      method: 'DELETE',
    })
  )
}

export const fetchTopWebsite = () => (
  $.ajax({
    method: 'GET',
    url: `/api/website/top`

  })
);
window.updateWebsite = updateWebsite
window.fetchWebsites = fetchWebsites