import React from 'react';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {
}

const defaultState: State = {
};

//var numberStock = parseInt(${this.props.totalSupply});

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut;
  }
  
  

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address">
            <span className="label">Your wallet address:</span>
            <span className="address">{this.props.userAddress}</span>
          </div>

          <div className="user-address">
            <span className="label">Sale status</span>
            {this.isSaleOpen() ?
              <>
                {this.props.isWhitelistMintEnabled ? 'Whitelist only' : 'Open'}
              </>
              :
              'Closed'
            }
          </div>
        </div>
      </>
    );
  }
}

{/* <div className="supply">
<span className="label">NFTs available</span>
<span>{this.props.maxSupply - this.props.totalSupply}/{this.props.maxSupply} </span>
</div> */}