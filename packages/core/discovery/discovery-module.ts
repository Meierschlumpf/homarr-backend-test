import { Module } from '@fily-cloud/common';
import { MetadataScanner } from '../metadata-scanner';
import { DiscoveryService } from './discovery-service';

/**
 * @publicApi
 */
@Module({
  providers: [MetadataScanner, DiscoveryService],
  exports: [MetadataScanner, DiscoveryService],
})
export class DiscoveryModule {}
