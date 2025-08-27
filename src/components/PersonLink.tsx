import React from 'react';
import { Person } from '../types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ person, people }) => {
  const { slug } = useParams();
  const mother = people.find(p => p.name === person.motherName);
  const father = people.find(p => p.name === person.fatherName);

  return (
    <tr
      key={person.slug}
      data-cy="person"
      className={slug === person.slug ? 'has-background-warning' : ''}
    >
      <td>
        <Link
          to={`/people/${person.slug}`}
          className={classNames(person.sex === 'f' ? 'has-text-danger' : '')}
        >
          {person.name}
        </Link>
      </td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      {person.motherName !== null ? (
        <td>
          {father ? (
            <Link to={`/people/${mother?.slug}`} className="has-text-danger">
              {person.motherName}
            </Link>
          ) : (
            <span>{person.motherName}</span>
          )}
        </td>
      ) : (
        <td>-</td>
      )}
      {person.fatherName !== null ? (
        <td>
          {father ? (
            <Link to={`/people/${father?.slug}`}>{person.fatherName}</Link>
          ) : (
            <span>{person.fatherName}</span>
          )}
        </td>
      ) : (
        <td>-</td>
      )}
    </tr>
  );
};
