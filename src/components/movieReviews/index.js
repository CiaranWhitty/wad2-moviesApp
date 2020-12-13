import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { Table } from 'semantic-ui-react'

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <Table unstackable striped padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >Author</Table.HeaderCell>
          <Table.HeaderCell >Excerpt</Table.HeaderCell>
          <Table.HeaderCell >More</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body >
        {reviews.map(r => {
              return (
                <tr key={r.id}>
                  <td>{r.author}</td>
                  <td>{excerpt(r.content)}</td>
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/reviews/${r.id}`,
                        state: {
                          review: r,
                          movie: movie
                        }
                      }}
                    >
                      Full Review
                    </Link>
                  </td>
                </tr>
              );
            })}
      </Table.Body>
    </Table>

    </>
  );
};