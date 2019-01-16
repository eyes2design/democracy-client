import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const VoteResultsWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const VoteResultNumbers = styled.View`
  width: ${() => Dimensions.get('window').width - 18 * 2};
  max-width: 464;
  padding-top: 18;
  flex-direction: row;
  justify-content: space-around;
`;

const VoteResult = styled.View`
  justify-content: center;
  align-items: center;
`;

const VoteResultCircleNumber = styled.View`
  flex-direction: row;
`;

const VoteResultNumber = styled.Text`
  color: #4a4a4a;
  font-size: 12;
`;
const VoteResultLabel = styled.Text`
  color: rgb(142, 142, 147);
  font-size: 10;
`;

const VoteResultCircle = styled.View`
  width: 10;
  height: 10;
  border-radius: 5;
  background-color: ${props => props.color};
  margin-top: 3;
  margin-right: 5;
`;

const ChartLegend = ({ data }) => {
  return (
    <VoteResultsWrapper>
      <VoteResultNumbers>
        {data.map(({ label, value, color }) => (
          <VoteResult key={label}>
            <VoteResultCircleNumber>
              <VoteResultCircle color={color} />
              <VoteResultNumber>{value}</VoteResultNumber>
            </VoteResultCircleNumber>
            <VoteResultLabel>{label}</VoteResultLabel>
          </VoteResult>
        ))}
      </VoteResultNumbers>
    </VoteResultsWrapper>
  );
};

ChartLegend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ChartLegend;
